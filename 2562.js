const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

var sorted = input.slice().sort(function(a,b){
    return b-a;
})
console.log(sorted[0]);
console.log(input.indexOf(sorted[0])+1);