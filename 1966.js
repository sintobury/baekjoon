const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let answer = [];
for(let i=1; i<=T; i++){
    let q = input[2*i-1].split(' ').map(Number);
    let list = input[2*i].split(' ').map(Number);
    let M = q[1];
    let count = 1;//순서
    while(true){
        let target = list.shift();
        let max = Math.max(...list);
        if(max <= target && M===0 ){
            answer.push(count);
            break;
        }else if(max > target && M===0 ){
            list.push(target);
            M=list.length-1;
        }else if(max>target){
            list.push(target);
            M--;
        }else if(max<=target){
            count++;
            M--;
        }
    }
}
console.log(answer.join('\n'))