/*function solution(numbers) {
    let answer = [];
    for(let i=0; i<numbers.length; i++) {
        let number= numbers[i];
        let result;
        let j = number+1;
        while( true ) {
            result = (j^number).toString(2);
            let difference = 0;
            for(let k=0; k<result.length; k++) {
                if(result[k] === '1') {
                    difference++;
                }
                if(difference > 2) {
                    break;
                }
            }
            if(difference <= 2) {
                answer.push(j);
                break;
            }
            j++;
        }
    }
    return answer;
}
1씩 바꾸면 시간 초과 및 32비트 이상은 연산불가(js 비트연산 특징)
*/
function solution(numbers) {
    return numbers.map(el => {
        if (el%2 === 0) return el +1
        //짝수면 맨뒤가 0이라 1커지면 무조건 2개이하로 다른 비트
        const bin = '0'+el.toString(2)
        const idx = bin.lastIndexOf('0')
        return parseInt(bin.substring(0,idx) + '10' + bin.substring(idx+2),2)
        //홀수는 맨 마지막에 나오는 0을 앞에 0을 붙여주고 1로 바꾸면서 그 뒤에나오는 비트를 0으로 만들어 변환
    })
}