const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let list = []
for(let i=1; i<=N; i++){
    let point = new Array()
    let x = Number(input[i].split(' ')[0]);
    let y = Number(input[i].split(' ')[1]);
    point.push(x);
    point.push(y);
    list.push(point)
}
let sort = list.slice().sort(function([a,b],[c,d]){
    if(b==d){
        return a-c;
    } else {
        return b-d;
    }
})
let answer = ''
for(let i=0; i<N; i++){
    answer+= sort[i].join(' ')
    if(i==N-1){
        break;
    }
    answer+='\n'
}
console.log(answer)