const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

var T = Number(input[0]);
var answer = new Array();
for(i=1; i<=T; i++){
    var testcase = input[i].split(' ');
    for(j=0; j<testcase[1].length; j++){
        for(k=0; k<Number(testcase[0]); k++){
            answer.push((testcase[1])[j])
        }
    }console.log(answer.join(''))
    var answer = []
}