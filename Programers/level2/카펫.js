function solution(brown, yellow) {
    const sum = brown + yellow;
    const sqrt = Math.floor(Math.sqrt(sum));
    console.log(sqrt)
    console.log(sum)
    if(sqrt*sqrt === sum) {
        console.log("true?")
        return [sqrt,sqrt];
    }
    let answer = [];
    for(let i=sqrt; i<=sum; i++) {
        if(sum%i === 0) {
            answer[0] = i;
            answer[1] = sum/i;
            break;
        }
    }
    console.log(answer);
    return answer;
}

solution(	10, 2)