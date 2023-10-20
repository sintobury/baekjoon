const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

var T = parseInt(input[0]) //test 갯수
var answer = ''
for(i=1; i<=T; i++){
    var a = parseInt(input[2*i-1])
    var b = parseInt(input[2*i])
    answer+=(a+b+'\n');
}
console.log(answer); //하나하나 console.log하는 것보다 묶어서 만든상태에서 console.log하는게 더 빠름
