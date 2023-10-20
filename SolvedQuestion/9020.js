const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var T = Number(input[0]);
var part = []
for(k=1; k<=T; k++){
    var n = Number(input[k])
    var list = Array(n+1).fill(true).fill(false,0,2);
    for(i=2; i*i<=n; i++){
        if(list[i]){
            for(j=i*i; j<=n; j+=i){
                list[j]=false;
            }
        }
    }//에라토스테네스의 체(알고리즘)
    var answer = []
    for(j=n/2; j<=n; j++){
        if(list[j]==true){
            if(list[n-j]==true){
                answer.push(j);
                answer.unshift(n-j);
                break;
            }
        }
    }
    part.push(answer.join(' '))
}
console.log(part. join('\n'))