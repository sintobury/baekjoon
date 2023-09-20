const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
if(input[0]===1){
    for(let i=0; i<8; i++){
        if(i===7&&input[i]===i+1){
            console.log('ascending')
        }else if(input[i]!==(i+1)){
            console.log('mixed')
            break;
        }
    }
}else if(input[0]===8){
    for(let i=0; i<8; i++){
        if(i===7&&input[i]===8-i){
            console.log('descending')
        }else if(input[i]!==(8-i)){
            console.log('mixed')
            break;
        }
    }
}else{
    console.log('mixed')
}