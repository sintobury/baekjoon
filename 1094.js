/*const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString();*/
//input = X
//처음에 64cm 막대 절반잘라서 남은막대 합이 X보다 크거나 같으면 잘랐던 절반을 버림
//남은막대를 붙여 X만듬
// 64 > 32  > 16 16 > 16 8  > 16 4 4  > 16 4 2 2  > 16 4 2 1   
let input = 23;
let list = [64];
let sum = list.reduce( (acc,cur) => {return acc + cur;}, 0);
let stick = list[0]/2;
let repStick = stick;
while(sum>input){
    sum = list.reduce( (acc,cur) => {return acc + cur;}, 0);
    console.log(sum)
    console.log(list)
    stick = list.shift()/2;
    repStick = stick;
    list.push(stick,repStick);
    sumForDeter = list.reduce( (acc,cur) => {return acc + cur;}, 0);
    console.log(list)
    console.log(sumForDeter)
    if(sumForDeter >= input){//막대중 작은 길이를 반으로
        list.shift()
    }else{

    }
    
}
