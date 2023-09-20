const input = require('fs').readFileSync('/dev/stdin').toString().trim();

var N = parseInt(input);
var cycle = new Array();
cycle.push(N)
var M = Math.floor(N/10) //십의 자리
var r = N%10 //일의 자리
if(N<10){
    cycle.push(N*10+N);
} else{
    var newNum1 = r*10+(M+r)%10
    cycle.push(newNum1);
}
for(i=1; cycle[i]!==N; i++){
    var last = cycle[i]
    var Ml = Math.floor(last/10)
    var rl = last%10
    var newNum2 = rl*10+(Ml+rl)%10
    cycle.push(newNum2)
}console.log(cycle.length-1);