const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

var first = parseInt(input[0]);
var second = parseInt(input[1]);
var third = parseInt(input[2]);
if((first === second)&&(second === third)){
    console.log(10000+(first*1000));
} else if(first === second){
    console.log(1000+(first*100));
} else if(first === third){
    console.log(1000+(first*100));
} else if(second === third){
    console.log(1000+(second*100));
} else{
    console.log(Math.max(first,second,third)*100);
}