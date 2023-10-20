const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
/* 높이 V 까지 올라가야함
낮에 A 만큼 올라감
밤에 B 만큼 내려감
정상에 닿으려면 몇일 걸리는지
(A-B)D>V*/
var A = Number(input[0])
var B = Number(input[1])
var V = Number(input[2])
var D = (V-B)/(A-B)
if(Number.isInteger(D)){
    console.log(D);
}else{
    console.log(Math.floor(D)+1);
}


/*
while(now<V){
    now+=A;
    if(now>=V){
        console.log(D);
        break;
    }
    now-=B;
    D+=1
}*/