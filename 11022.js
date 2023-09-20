const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

var T = parseInt(input[0]) //T= testcase
for(i=1; i<=T; i++){
    var A = parseInt(input[2*i-1])
    var B = parseInt(input[2*i])
    console.log('Case'+' '+'#'+i+':'+' '+A+' '+'+'+' '+B+' '+'='+' '+(A+B));
}