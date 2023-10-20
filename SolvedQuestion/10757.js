const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
var A = BigInt(input[0])
var B = BigInt(input[1])
var sum = A+B
console.log(sum.toString());

/*var sum = []
var same = '0'
var next = 0
if(A.length>B.length){
    for(j=0; j<A.length; j++){
        same+='0'
        var a = '0'+A
        var b = same+B
        if(a.length == b.length){
            break;
        }
    }
    for(i=a.length-1; i>=0; i--){
        if((Number(a[i])+Number(b[i]))>9){
            sum.unshift((Number(a[i])+Number(b[i])+next).toString()[1])
            var next = 1
        } else{
            sum.unshift((Number(a[i])+Number(b[i])+next))
            var next = 0
        }
    }
    console.log(sum.join(''))
} else if(A.length == B.length){
    var a = '0'+A
    var b = '0'+B
    for(i=a.length-1; i>=0; i--){
        if((Number(a[i])+Number(b[i]))>9){
            sum.unshift((Number(a[i])+Number(b[i])+next).toString()[1])
            var next = 1
        } else{
            sum.unshift((Number(a[i])+Number(b[i])+next))
            var next = 0
        }
    }
    console.log(sum.join(''))
} else {
    for(k=0; k<B.length; k++){
        same+='0'
        var a = same+A
        var b = '0'+B
        if(a.length == b.length){
            break;
        }
    }
    for(i=b.length-1; i>=0; i--){
        if((Number(a[i])+Number(b[i]))>9){
            sum.unshift((Number(a[i])+Number(b[i])+next).toString()[1])
            var next = 1
        } else{
            sum.unshift((Number(a[i])+Number(b[i])+next))
            var next = 0
        }
    }
    console.log(sum.join(''))
}*/