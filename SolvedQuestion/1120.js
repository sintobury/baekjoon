const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let A = input[0];
let B = input[1];
let a = A
let list = []
while(B.length>=a.length){
    let count = 0 
    for(let j=0; j<B.length; j++){
        if(a[j]===B[j]){
            count++
        }
    }
    list.push(A.length-count)
    a ='0'+ a
}
answer = list.slice().sort(function(a,b){
    return a-b;
})
console.log(answer[0])