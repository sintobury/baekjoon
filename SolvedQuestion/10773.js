const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let k = Number(input[0])
let list = []
for(let i=1; i<=k; i++){
    if(input[i].trim()!=='0'){
        list.push(input[i]);
    }else {
        list.pop();
    }
} 
let answer = 0
for(let i=0; i<list.length; i++){
    answer+=Number(list[i]);
}
console.log(answer)