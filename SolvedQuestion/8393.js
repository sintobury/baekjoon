const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();


var n = parseInt(input);
var sum = 0
for(i=1; i<=n; i++){
    sum+=i
}
console.log(sum);