const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('');

var count = 0
for(i=0; i<input.length; i++){
    if((input[i]=='d')&&(input[i+1]=='z')&&(input[i+2]=='=')){
        count+=0
    } else if((input[i]=='c')&&(input[i+1]=='=')){
        count+=0
    } else if((input[i]=='c')&&(input[i+1]=='-')){
        count+=0
    } else if((input[i]=='d')&&(input[i+1]=='-')){
        count+=0
    } else if((input[i]=='l')&&(input[i+1]=='j')){
        count+=0
    } else if((input[i]=='n')&&(input[i+1]=='j')){
        count+=0
    } else if((input[i]=='s')&&(input[i+1]=='=')){
        count+=0
    } else if((input[i]=='z')&&(input[i+1]=='=')){
        count+=0
    } else {
        count+=1
    }
}
console.log(count)