const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let list = []
for(i=1; i<=N; i++){
    let word = input[i]
    if(list.includes(word)){
        continue;
    } else {
        list.push(word)
    }
}
let sort = list.slice().sort(function(a,b){
    if(a.length===b.length){
        for(let i=0; i<a.length; i++){
            if(a.codePointAt(i)==b.codePointAt(i)){
                continue;
            } else{
                return a.codePointAt(i)-b.codePointAt(i)
            }
        }
    } else {
        return a.length-b.length;
    }
})
console.log(sort.join('\n'))