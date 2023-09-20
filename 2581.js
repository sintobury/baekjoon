const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var M = Number(input[0])
var N = Number(input[1])
var list = new Array();
var sum = 0
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
        sum+=i
    }
}
if(sum==0){
    console.log('-1');
} else{
    console.log(sum)
    console.log(list[0])
}