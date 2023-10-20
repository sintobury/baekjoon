const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = []
let sum = 0 
for(i=0; i<5; i++){
    answer.push(Number(input[i]));
    sum += Number(input[i])
}
let S = answer.sort(function(a,b){
    return a-b;
})
let A = []
A.push(sum/5)
A.push(S[2])
console.log(A.join('\n'))