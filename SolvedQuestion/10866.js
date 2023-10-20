const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0]);
let deck = []
let answer = ''
for(let i=1; i<=N; i++){
    if(input[i].includes('push_front')){
        deck.unshift(Number(input[i].split(' ')[1]));
    }else if(input[i].includes('push_back')){
        deck.push(Number(input[i].split(' ')[1]));
    }
    if(input[i].split(' ').length===1){
        if(input[i].trim()==='pop_front'){
            if(deck.length>0){
                let first = deck.shift();
                answer+=first;
            }else {
                answer+=-1
            }
        }else if(input[i].trim()==='pop_back'){
            if(deck.length>0){
                let last = deck.pop();
                answer+=last;
            }else {
                answer+=-1;
            }
        }else if(input[i].trim()==='size'){
            answer+=(deck.length);
        }else if(input[i].trim()==='empty'){
            if(deck.length===0){
                answer+=1;
            }else {
                answer+=0;
            }
        }else if(input[i].trim()==='front'){
            if(deck.length>0){
                answer+=deck[0];
            }else {
                answer+=-1;
            }
        }else if(input[i].trim()==='back'){
            if(deck.length>0){
                answer+=deck[deck.length-1]
            }else {
                answer+=-1
            }
        }
        if(i===N){
            break;
        }
        answer+='\n'
    }
}
console.log(answer)