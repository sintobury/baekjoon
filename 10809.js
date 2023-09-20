const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var answer = new Array();
for(j=0; j<26; j++){
    answer.push(-1)
}
for(i=input.length; i>-1; i--){
    if(alpha.includes(input[i])){
        answer.splice(alpha.indexOf(input[i]),1,i)
    } 
}
console.log(answer.join(' '))
