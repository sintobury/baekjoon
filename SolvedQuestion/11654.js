const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

var ASC = new Object();
var Alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
for(i=0; i<10; i++){
    ASC[i] = i+48;
}
for(j=0; j<26; j++){
    ASC[Alpha[j]] = j+65;
}
for(k=0; k<26; k++){
    ASC[alpha[k]] = k+97;
}
console.log(ASC[input])