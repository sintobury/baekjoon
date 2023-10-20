const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
let N = Number(input);
let fac = 1
for(let i=1; i<=N; i++){
    fac=fac*i
}
console.log(fac)