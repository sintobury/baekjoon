const fs = require('fs')
const input = fs.readFileSync(__dirname+'/input.txt').toString().trim().split('\n');
let N = Number(input[0]);
let list = input[1].split(' ').map(Number);
let M = Number(input[2]);
let Q = input[3].split(' ').map(Number);
let sl = list.slice().sort(function(a,b){
    return a-b;
});
let sol = [];
for(let i=0; i<M; i++){
    let q = Q[i]
    let start = 0;
    let end = N-1;
    let answer = 0;
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(sl[mid]===q){
            answer = 1;
            break;
        }
        else if(sl[mid]>q){
            end = mid-1;
        }else {
            start = mid+1;
        }
    }
    sol.push(answer);
}
console.log(sol.join('\n'))