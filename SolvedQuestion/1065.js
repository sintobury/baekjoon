const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
var count = 0
var H = function(n){
    var N = n.toString();
    for(i=1; i<=n; i++){
        var c = i
        var C = c.toString();
        if(C.length == 4 
            &&(C[0]-C[1])==(C[1]-C[2])
            &&(C[1]-C[2])==(C[2]-C[3])){
            count +=1
        } else if(C.length == 3
            &&(C[0]-C[1])==(C[1]-C[2])){
            count+=1
        } else if(C.length == 2){
            count+=1
        } else if(C.length == 1){
            count+=1
        }
    }
}
H(input)
console.log(count)