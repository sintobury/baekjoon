const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let fame = input[0]-input[1]
if(fame>=0){
    console.log(fame)
}else {
    console.log((-1)*fame)
}