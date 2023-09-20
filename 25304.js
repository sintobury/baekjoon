const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

var X = parseInt(input[0]) //총액
var N = parseInt(input[1]) //총 물건 종류수
var sum = 0
for(i=0; i<N; i++){
    var a = parseInt(input[2*i+2])
    var b = parseInt(input[2*i+3])
    sum += a*b
}
if(sum===X){
    console.log('Yes');
} else{
    console.log('No');
}