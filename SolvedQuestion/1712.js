const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

var A = Number(input[0])//고정지출
var B = Number(input[1])//가변지출
var C = Number(input[2])//수익
//A-(C-B)x>0 의 X를 구하라
if(C>B){
    if(A%(C-B)==0){
    console.log((A/(C-B)+1));
    } else{
        console.log(Math.ceil(A/(C-B)));
    }
} else{
    console.log(-1);
}