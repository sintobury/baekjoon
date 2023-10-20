const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();
//input = X (X번째 분수)
/*1 2 4 7 11 n
  1 2 3 4 5 count*/
var X = Number(input)
var n = 0
var count = 1
while(n<X){
    n+=count
    if(n>=X){
        break;
    }
    count+=1
}
if(count%2==1){
console.log(((n-X)+1)+'/'+(count-(n-X)))
}
if(count%2==0){
    console.log((count-(n-X))+'/'+((n-X)+1))
}     




/*
for(i=0; down[i]<=10000000; i++){
    n+=(i+1)
    down.push(n)
    if(X<down[i]){
        if(i%2==0){
            console.log(1+(X-down[i-1])+'/'+(i-(X-down[i-1])));
        } else if(i%2==1) {
            if(X==1){
                console.log('1/1');
            } else{
            console.log((i-(X-down[i-1]))+'/'+(1+(X-down[i-1])));
            } 
        }
        break;       
    }
}*/