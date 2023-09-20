const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0]);
let que = []
let answer = ''
for(let i=1; i<=N; i++){
    if(input[i].split(' ').length===2){
        que.push(Number(input[i].split(' ')[1]));
    } else{
        if(input[i].trim()==='pop'){
            if(que.length>0){
            let a = que.shift();
            answer+=a;
            }else {
                answer+=-1
            }
        }else if(input[i].trim()==='size'){
            answer+=que.length;
        }else if(input[i].trim()==='empty'){
            if(que.length===0){
                answer+=1
            }else{
                answer+=0
            }
        }else if(input[i].trim()==='front'){
            if(que.length>0){
                answer+=que[0];
            }else {
                answer+=-1
            }
        }else if(input[i].trim()==='back'){
            if(que.length>0){
                answer+=que[que.length-1];
            }else {
                answer+=-1
            }
        }
        if(i===N){
            break;
        }else {
            answer+='\n'
        }
    }
}
console.log(answer)