const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);


var T = ((input.length)/2) 
for(i=0; i<T; i++){
    var A = parseInt(input[2*i])
    var B = parseInt(input[2*i+1])
    console.log(A+B);
}