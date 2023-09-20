const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

for(j=1; j<=parseInt(n); j++){
    var count = new Array();
    var num = 0
    var sum = 0
    for(i=0; i<input[j].length; i++){
        if(input[j][i]=='O'){
            num += 1
            count.push(num)
            }
        if(input[j][i]=='X'){
                num = 0
            }
    }
    for(i=0; i<count.length; i++){
        sum += count[i]
    }
    console.log(sum)
}