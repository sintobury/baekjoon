const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

var n = parseInt(input[0])
var arr = input[1].split(' ')
var num = new Array();
for(i=0; i<n; i++){
    num.push(parseInt(arr[i]))
}

var sorted = num.slice().sort(function(a,b){
    return b-a;
})

console.log(sorted[sorted.length-1]+' '+sorted[0]);