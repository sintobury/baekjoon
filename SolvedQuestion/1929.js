const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
var M = Number(input[0]);
var N = Number(input[1]);
var list = Array(N+1).fill(true).fill(false,0,2);
for(i=2; i*i<=N; i++){
    if(list[i]){
        for(j=i*i; j<=N; j+=i){
            list[j]=false;
        }
    }
}//에라토스테네스의 체(알고리즘)
var answer = []
for(j=M; j<=N; j++){
    if(list[j]==true){
        answer.push(j)
    }
}
console.log(answer.join('\n'))//소수만을 골라 꺼내오는것
/*
var list = new Array();
for(i=M; i<=N; i++){
    var count =0
    for(j=1; j<=i; j++){
        if(i%j==0){
            count++;
            if(count>2){
                count = 0
                break;
            }
        }
    }
    if(count==2){
        list.push(i);
    }
}
var answer = list.join('\n')
console.log(answer)*/