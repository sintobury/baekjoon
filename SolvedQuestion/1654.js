const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let K = Number(input[0].split(' ')[0])
let N = Number(input[0].split(' ')[1])
let list = input.slice();
list.splice(0,1).map(Number);
let sort = list.slice().sort(function(a,b){
    return a-b;
})
let start = 0;
let end = sort[K-1];
let best = 0;
while(start<=end){
    let mid = Math.floor((start+end)/2);
    let sum = 0;
    for(let i=0; i<K; i++){
        sum+=Math.floor(sort[i]/mid);
    }
    if(sum>=N){
        start = mid+1;
        if(mid>best){
            best=mid;
        }
    }else {
        end = mid-1;
    }
}
console.log(best)