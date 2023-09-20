const fs = require('fs')
const input = fs.readFileSync(__dirname+'/input.txt').toString().trim();
let N = Number(input);
let list = []
for(let i=0; i<N; i++){
    list.push(i+1);
}
while(list.length>1){
    console.log(list)
    list.shift();
    if(list.length===1){
        break;
    }else{
        list.push(list.shift());
    }
}
console.log(list[0])//시간초과
//linked list 만들어서 해야 초과안됨
