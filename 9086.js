const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let answer = []
for(let i=1; i<=T; i++){
    answer.push(input[i][0]+input[i][input[i].length-1])
}
console.log(answer.join('\n'))