const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
var A = input[0];
var B = input[1];
var SA = new Array();
var SB = new Array();
for(i=0; i<A.length; i++){
    SA.push(A[i]);
    SB.push(B[i]);
}
var SangA = SA.reverse();
var SangB = SB.reverse();
if(Number(SangA.join(''))>Number(SangB.join(''))){
    console.log(SangA.join(''));
} else{
    console.log(SangB.join(''));
}