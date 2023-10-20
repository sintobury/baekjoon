const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let list = input[1].split(' ').map(Number);
let set = new Set(list);
let remove = [...set];//중복값 제거 가장 간단한방법
let sort = remove.slice().sort(function(a,b){
    return a-b;
})
var answer = {}
for(let i=0; i<sort.length; i++){
    answer[sort[i]]=i;
}//객체에 정렬한 값들을 key로 그값의 인덱스는 value로 지정
let solution =''
for(value of list){
    solution+=answer[value]+' ';
}//답안에는 입력값의 순서대로 입력값에 해당되는 인덱스들을 출력하게 생성(for문을 통해 하나씩 비교하는 것보다 빠름)
console.log(solution)