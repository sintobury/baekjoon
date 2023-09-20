const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

var n = parseInt(input[0]) // 첫째줄
var arr = input[1].split(' ') //둘째줄을 배열로

var num = new Array();
var Newnums = new Array();
var M = 0
for(i=0; i<n; i++){
    num.push(parseInt(arr[i]))
}
var sorted = arr.slice().sort(function(a,b){
    return b-a;
})
for(i=0; i<n; i++){
    var newnum = (num[i]/sorted[0]*100);
    Newnums.push(newnum);
}
for(i=0; i<n; i++){
    M += Number(Newnums[i])
}
console.log((M/n))