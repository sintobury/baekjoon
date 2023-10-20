const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
let N = Number(input);
let answer = ''
for(let i=0; i<N; i++){
    answer+=N-i
    if(i===N-1){
        break;
    }else {
        answer+='\n'
    }
}
console.log(answer)