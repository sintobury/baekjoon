const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var T = Number(input[0]);
var answer = 0
var list = input[1].split(' ')
for(i=0; i<T; i++){
    var count =0
    for(j=1; j<=list[i]; j++){
        if(list[i]%j==0){
            count++;
            if(count>2){
                count = 0
                break;
            }
        }
    }
    if(count==2){
        answer++;
    } 
}
console.log(answer)