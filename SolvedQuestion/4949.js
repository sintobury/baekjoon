const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let i=0;
let answer = [];
let open = ['[', '('];
let close = [']', ')'];
while(input[i]!=='.'){
    let stack = [];
    let Q = input[i].split('')
    let isno = false;
    for(let j=0; j<Q.length; j++){
        if(open.includes(Q[j])){
            stack.push(Q[j]);           
        } 
        if(close.includes(Q[j])){
            if(stack.pop()!==open[close.indexOf(Q[j])]){
                answer.push('no');
                isno = true;
                break;
            }
        }
    }
    if(!isno){
        if(stack.length===0){
            answer.push('yes');
        }else{
            answer.push('no');
        }
    }
    i++;
}
console.log(answer.join('\n'))