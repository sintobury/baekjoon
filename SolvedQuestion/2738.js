const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var size = input[0].split(' ')
var N = Number(size[0])//행렬 세로
var M = Number(size[1])//행렬 가로
var A = []
var B = []
for(let i=1; i<=N; i++){
    for(let j=0; j<M; j++){
        A.push(input[i].split(' ')[j])

    }
}
for(let i=N+1; i<=2*N; i++){
    for(let j=0; j<M; j++){
        B.push(input[i].split(' ')[j])
    }
}
for(let i=0; i<N; i++){
    var answer = []
    for(let j=0; j<M; j++){
        answer.push(Number(A[j])+Number(B[j]));
    }
    A.splice(0,M);
    B.splice(0,M);
    console.log(answer.join(' '))
}
