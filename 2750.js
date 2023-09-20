const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let answer = []
for(i=1; i<=N; i++){
    answer.push(Number(input[i]));
}
let S = answer.sort(function(a,b){
    return a-b;
})
console.log(S.join('\n'))