/*2층 1 4 10  1+sum
1층 1 3 6  sum 
0층 1 2 3 

배열 n하나 0층값 list하나
for문 k번만큼 그안 for문을 n번만큼
i, j 
리스트 [j] += 리스트 [j-1]
최종은 list의 n번값
이전값 기반으로 현재값 추론 다이나믹 프로그래밍
*/
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var T = Number(input[0]);
for(l=1; l<=T; l++){
    var K = Number(input[2*l-1])
    var N = Number(input[2*l])
    var list = []
    for(k=0; k<N; k++){
        list.push(k+1);
    }
    for(i=0; i<K; i++){
        for(j=1; j<N; j++){
            list[j]+=list[j-1]
        }
    }
    console.log(list[N-1])
}