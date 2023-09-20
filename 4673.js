/* n = 양의 정수
d(n) = n과 n의 각 자리수를 더하는 함수
d(75) = 75+7+5=87
이를 통해 무한히 수열 생성
다음수를 만드는 n은 생성자라고 지칭
생성자가 여럿인 경우도 있음 ex) 101 = 100, 91
생성자가 없는 경우는 셀프넘버 100보다 작은 셀프 넘버는 13개 
10000보다 작거나 같은 셀프넘버를 한줄에 하나씩 출력*/
var list = new Array();
var d = function(n){
    var N = n.toString();
    var sum = 0
    for(i=0; i<N.length; i++){
        sum+=Number(N[i]);
    }
    list.push(n+sum);
}
for(j=1; j<=10000; j++){
    d(j);
}
sorted = list.slice().sort(function(a,b){return a-b;})
var list2 = new Array();
for(k=1; k<=10000; k++){
    list2.push(k);
}
for(l=0; l<10000; l++){
    if(list2.includes(sorted[l])){
        list2.splice(list2.indexOf(sorted[l]),1)
    }
}    
var answer = ''
for(u=0; u<list2.length; u++){
    answer += list2[u]+'\n'
}
console.log(answer)