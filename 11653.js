const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
var N = Number(input);
var answer = new Array(); 
for(i=2; i<=N; i++){
    if(N%i==0){
        answer.push(i);
        N=N/i;
        i=1
    }
}
console.log(answer.join('\n'))