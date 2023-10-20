const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0].trim().split(' ')[0]);
let M = Number(input[0].trim().split(' ')[1]);
let list = input[1].trim().split(' ').map(Number);
let sort = list.slice().sort(function(a,b){
    return b-a;
})
let start = 0
let end = sort[0]
let best = 0
while(start<=end){
    var mid = Math.floor((end+start)/2)
    let sum = 0;
    for(let i=0; i<N; i++){
        if(list[i]-mid>0){
            sum+=(list[i]-mid)
        }
    }
    if(sum>=M){
        start = mid+1;
        if(mid>best){
            best = mid
        }
    } else {
        end = mid-1; 
    }
}
console.log(best)