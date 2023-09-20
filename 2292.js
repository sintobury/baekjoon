const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
var N = Number(input);
//1부터 1층 올리는데 필요량 6n씩 증가 n(1부터 1씩 증가)= 벌집 층수-1
//N이 몇층인지 확인 해당층수 +1 이 최소
//N<1+6n일때 n값 이 최소값
var total = 1
for(i=0; i<=((N-1)/6)+1; i++){
    total += 6*i
    if(N<=total){
        console.log(i+1)
        break;
    }
    if(N == 1){
        console.log(1);
        break;
    }
}