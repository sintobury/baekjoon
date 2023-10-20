const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

var N = parseInt(input[0]) //N = 주어진 정수갯수
var X = parseInt(input[1]) //X = 작아야하는 정수
/*2째줄부터 주어진 정수 갯수만큼은 정수*/
var low = new Array();
for(i=2; i<N+2; i++){
    if(input[i]<X){
        low.push(input[i])
    }
}
console.log(low.join(' '))