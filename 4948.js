const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var answer= []
for(k=0; k<input.length-1; k++){
    var N= Number(input[k])
    var list = Array((2*N)+1).fill(true).fill(false,0,2);
    for(i=2; i*i<=2*N; i++){
        if(list[i]){
            for(j=i*i; j<=2*N; j+=i){
                list[j]=false;
            }
        }
    }//에라토스테네스의 체(알고리즘)
    var count = 0
    for(j=N+1; j<=2*N; j++){
        if(list[j]==true){
            count++
        }
    }
    answer.push(count)
}
console.log(answer.join('\n'))