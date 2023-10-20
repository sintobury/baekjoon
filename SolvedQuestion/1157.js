const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

count = new Array();
for(j=0; j<26; j++){
    count.push(0);
}
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var Alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
for(i=0; i<input.length; i++){
    for(j=0; j<26; j++){
        if((input[i]==Alpha[j])||(input[i]==alpha[j])){
            count[j]+=1
        }
    }
}
var max = Math.max.apply(null,count)
if(count.indexOf(max)!=(count.lastIndexOf(max))){
    console.log('?')
} else{
    console.log(Alpha[count.indexOf(max)])
}