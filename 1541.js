const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
let M = input.split('-')
for(let i=0; i<M.length; i++){
    let sum = 0
    if(M[i].includes('+')){
        var P = M[i].split('+').map(Number)
        for(let j=0; j<P.length; j++){
            sum+=P[j]
        }
        M[i]=sum;
    }
}
let answer = Number(M[0]);
for(let i=1; i<M.length; i++){
    answer-=Number(M[i])
}
console.log(answer)