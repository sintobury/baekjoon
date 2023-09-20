const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

var N = parseInt(input)
var blank = ''
for(i=0; i<N; i++){
    for(j=0; j<N-i-1; j++){
        blank += ' ';
    }
    for(k=0; k<=i; k++){
        blank += '*';
    }
    blank += '\n';
}console.log(blank)