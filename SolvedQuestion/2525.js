const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

var H = parseInt(input[0])
var M = parseInt(input[1])
var cook = parseInt(input[2])
var end = (H*60)+M+cook;
if(end>1440){
    console.log(Math.floor((end-1440)/60)+' '+((end-1440)%60));
} else if(end === 1440){
    console.log(0+' '+0);
} else {
    console.log(Math.floor(end/60)+' '+(end%60));
}