const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

var C = input[0];
//C = 주어진 테스트 갯수
/*2째줄부터 주어진 정수 는 학생수, 점수들 */

for(i=0; i<C; i++){
    var arr = (input[i+1].split(' ')).slice()
    var sum = 0
    for(j=1; j<arr.length; j++){
        sum += parseInt(arr[j]);
    }
    if(arr.length-1 == arr[0]){
        var count = 0
        for(k=1; k<arr.length; k++){
            if(arr[k]>sum/(arr.length-1)){
                count += 1
            }
        }
    console.log((count/(arr.length-1)*100).toFixed(3)+'%');
    arr = []
    }
}