const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//index가 -1이 되는 경우는 배열에 그 값을 가진게 없는 경우 -1을 indexOf가 배출
//push로 제일 뒤에 처음찾은 문자를 넣고 처음찾은게 아닌데 제일 뒤의 문자가 아니면 제일 최근 찾은 문자가 아니므로 연속되어있지 않음(그룹문자가 아님)
//이경우 true였던 값을 false로 바뀌게하고 break를 걸어 그 단어는 카운트 하지 않게 만듦
var N = Number(input[0]);
var count = 0
for(i=0; i<N; i++){
    var word = input[i+1]
    var search = new Array();
    var isgroupword = true;
    for(j=0; j<word.length; j++){
        if(search.indexOf(word[j])===-1){
            search.push(word[j]);
        } else {
            if(search.indexOf(word[j])!==search.length-1){
                isgroupword = false;
                break;
            }
        }
    }
    if(isgroupword){
        count+=1
    }
}
console.log(count)