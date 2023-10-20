const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

var x = parseInt(input[0])
var y = parseInt(input[1])
if((x>0)&&(y>0)){
    console.log("1");
} else if((x>0)&&(y<0)){
    console.log("4");
} else if((x<0)&&(y>0)){
    console.log("2");
} else{
    console.log("3");
}