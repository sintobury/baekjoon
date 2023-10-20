const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

var N = parseInt(input)
var answer = new Array();
for(i=0; i<N; i++){
    answer.push('*');
    console.log(answer.join(''));
}