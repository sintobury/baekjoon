const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

var H = parseInt(input[0])
var M = parseInt(input[1])
var alram = ((H*60)+M-45);
if(alram>0){
    console.log(Math.floor(alram/60)+' '+(alram%60));
} else if(alram === 0){
    console.log(0+' '+0)
} else {
    console.log(Math.floor((1440+alram)/60)+' '+((1440+alram)%60));
}