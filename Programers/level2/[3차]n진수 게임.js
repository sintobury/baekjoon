function solution(n, t, m, p) {
    let answer = '';
    let start = 0;
    const answerList = [];
    while(answer.length < t) {
        const number = start.toString(n);
        for(let i=0; i<number.length; i++) {
            answerList.push(number[i]);
        }
        start++;
        if(answerList.length >= m*(t-1) + p) {
            for(let j=0; j<answerList.length; j++) {
                if(answer.length === t) {
                    break;
                }
                if(j%m === p-1) {
                    answer += answerList[j].toUpperCase();
                }
            }
            break;
        }
    }
    return answer;
}

console.log(solution(16,16,2,1))