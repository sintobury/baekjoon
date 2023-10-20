const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

var a = input[0];
var b = input[1];
for(i=2;i>-1;i--){
    console.log(parseInt(a)*parseInt(b[i]));
}
console.log(parseInt(a)*parseInt(b)); 