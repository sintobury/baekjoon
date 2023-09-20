const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
let list = []
for(let i=0; i<input.length; i++){
    list.push(input.substring(i))
}
let answer = list.sort();
console.log(answer.join('\n'))