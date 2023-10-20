const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

var count = 0
var M = new Map();
for(i=0; i<10; i++){
    M.set(input[i]%42);
}
for(i=0; i<42; i++){
    if(M.has(i)){
        count += 1;
    }
}
console.log(count)