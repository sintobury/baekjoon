const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let A =input[0]
let B =input[1]
let C =input[2]
let D =(A*B*C).toString();
let answer = ''
for(let i=0; i<10; i++){
    let count = 0;
    for(let j=0; j<D.length; j++){
        if(Number(D[j])===i){
            count++
        }
    }
    answer+=count
    if(i===9){
        break;
    } else{
        answer+='\n'
    }
}
console.log(answer)