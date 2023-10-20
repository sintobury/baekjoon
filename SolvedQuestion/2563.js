const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let T = Number(input[0]);
let arr = new Array(100);
for(let i=0; i<100; i++){
    arr[i]= new Array(100)
}
for(let i=0; i<100; i++){
    for(let j=0; j<100; j++){
        arr[i][j]= 0
    }
}
for(let i=1; i<=T; i++){
    let x = Number(input[i].split(' ')[0]);
    let y = Number(input[i].split(' ')[1]);
    for(let j=y; j<y+10; j++){
        for(let k=x; k<x+10; k++){
            arr[j][k]=1
        }
    }
}
let count = 0;
for(let i=0; i<100; i++){
    for(let j=0; j<100; j++){
        if(arr[i][j]===1){
            count++
        } 
    }
}
console.log(count)