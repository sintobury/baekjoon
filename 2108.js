const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let N = input[0];
let sum = 0;
let answer = []
let solution = ''
for(let i=1; i<=N; i++){
    var n = input[i]
    answer.push(n)
    sum+=n
}
let S = answer.slice().sort(function(a,b){
    return b-a;
})
let counting= [];
for(let i=0; i<N; i++){
    let count = 0
    for(let j=0; j<N; j++){
        if(answer[i]==answer[j]){
            count++
        }
    }
    counting.push(count)
}
let SC = counting.slice().sort(function(a,b){
    return b-a;
})
let Max = SC[0]
let max = {}
for(let i=0; i<answer.length; i++){
    max[answer[i]]=counting[i]
}
let list = []
for(num of max){
    if(max[num]==SC[0]){
        list.push(num);
    }
}
let LS = list.slice().sort(function(a,b){
    return a-b;
})

if(Math.round(sum/N)===-0){
    solution+=(0)+'\n'
} else if(Number.isInteger(sum/N)){
    solution+=(sum/N)+'\n'
} else {
    solution+=(Math.round(sum/N))+'\n'
}

if(Number.isInteger(S.length/2)){
    solution+=(S[S.length/2])+'\n'
} else {
    solution+=(S[Math.floor(S.length/2)])+'\n'
}

if(SC.lastIndexOf(SC[0])==0){
    solution+=(list[0])+'\n'
}else if(LS.length>1){
    solution+=(LS[1])+'\n'
}else {
    solution+=(LS[0])+'\n'
}

if(N==1){
    solution+=(0)
}else {
    solution+=(S[0]-S[S.length-1])
}
console.log(solution)