const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
let answer = ''
for(let i=0; i<Number(input); i++){
    answer+=i+1;
    if(i+1===Number(input)){
        break;
    }
    answer+='\n';
}
console.log(answer)