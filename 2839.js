const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

var N = Number(input);
var list = [0];
for(i=0; i<=N; i++){
    for(j=0; j<=N; j++){
        if(3*i+5*j==N){
            list.push(i+j)
            if(list.indexOf(i+j)!=(list.lastIndexOf(i+j))){
                list.pop()
            }
        }
    }
}
if(list.length>1){
var sorted = list.sort(function(a,b){
    return a-b;
});
console.log(sorted[1])
} else {
    console.log(-1)
}