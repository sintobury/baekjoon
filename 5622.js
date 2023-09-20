const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('');

var Alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toString().split('')
var time = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,9,9,9,10,10,10,10]
var total = 0
for(i=0; i<input.length; i++){
    total+=time[Alpha.indexOf(input[i])]
}
console.log(total)