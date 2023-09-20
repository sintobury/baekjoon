const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0].split(' ')[0])
let k = Number(input[0].split(' ')[1])
let answer = []
for(i=0; i<N; i++){
    answer.push(Number(input[1].split(' ')[i]))
}
let S = answer.sort(function(a,b){
    return b-a;
})
console.log(S[k-1])