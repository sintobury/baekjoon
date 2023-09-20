const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let list = []
for(let i=1; i<=N; i++){
    list.push(input[i].split(' '))
}
let sort = list.slice().sort(function([a,b],[c,d]){
    return Number(a)-Number(c);
})
let answer = ''
for(let i=0; i<sort.length; i++){
    answer+=sort[i].join(' ')
    if(i==sort.length-1){
        break;
    }
    answer+='\n'
}
console.log(answer)