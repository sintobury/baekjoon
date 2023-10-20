const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
let answer = new Array();
for(i=0; i<input.length; i++){
    answer.push(Number(input[i]))
}
let list = answer.slice().sort(function(a,b){
    return b-a;
})
console.log(list.join(''))