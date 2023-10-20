const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0].split(' ')[0])//세로길이
let M = Number(input[0].split(' ')[1])//가로길이
let R = Number(input[0].split(' ')[2])//회전수
let list = []
for(let i=1; i<input.length; i++){
    let Warr = input[i].split(' ');
    list.push(Warr);
}
for(let k=0; k<R; k++){
    let arr = new Array(N).fill(null).map(()=>new Array(M).fill(0));
    let count = 0;
    while(count<Math.min(N,M)/2){
        for(let i=count+1; i<N-count; i++){
            arr[i][count]=list[i-1][count]
        }
        for(let i=count+1; i<M-count; i++){
            arr[N-1-count][i]=list[N-1-count][i-1]
        }
        for(let i=N-2-count; i>-1+count; i--){
            arr[i][M-1-count]=list[i+1][M-1-count]
        }
        for(let i=M-2-count; i>-1+count; i--){
            arr[count][i]=list[count][i+1]
        }
        count++
    }//count로 하나씩 늘려가면서 좌표조절
    list = arr;
}
let answer = ''
for(let i=0; i<N; i++){
    answer+=list[i].join(' ')
    if(i===N-1){
        break;
    }
    answer+='\n'
}
console.log(answer)