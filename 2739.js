const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

var N = parseInt(input)
for(i=1; i<10; i++){
    console.log(N+ ' '+'*'+' '+i+' '+'='+' '+(N*i));
}