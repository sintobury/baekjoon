const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

var N = Number(input[0])
var Num = input[1].toString(" ")
var sum = 0
for(i=0; i<N; i++){
    sum+=Number(Num[i]);
}
console.log(sum)