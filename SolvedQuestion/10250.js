const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
var T = Number(input[0]) // test 수
for(i=1; i<=T; i++){
    var test = input[i].toString().trim().split(' ')
    var H = Number(test[0])
    var W = Number(test[1])
    var N = Number(test[2])
    var h = 0
    var w = 1
    var count = 0
    while(count<N){
        h++
        if(h>H){
            h=1;
            w++
        }
        count++
    }
    height = h.toString()
    room = w.toString()
    if(w<10){
        room = '0'+ room
    }
    console.log(height+room);
}