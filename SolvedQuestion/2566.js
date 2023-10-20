const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var answer = []
var place = []
for(let i=0; i<9; i++){
    var list = []
    for(let j=0; j<9; j++){
        let A = input[i].split(' ');
        list.push(Number(A[j]))
    }
    list.sort(function(a,b){
        return b-a ;
    })
    answer.push(list[0]);
}
answer.sort(function(a,b){
    return b-a ;
})
let max = answer[0]
for(let i=0; i<9; i++){
    for(let j=0; j<9; j++){
        let B = input[i].split(' ');
        if(B.includes(max.toString())){
            place.push(i+1)
            place.push(B.indexOf(max.toString())+1)
            break;
        }
    }
} 
console.log(max);
console.log(place.join(' '))