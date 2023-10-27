function solution(brown, yellow) {
    const sum = brown + yellow;
    let answer = [];
    for(let i=3; i<sum; i++) {
        let w = sum/i;
        let h = i;
        if((w-2)*(h-2)===yellow) {
            answer[0] = w;
            answer[1] = h;
        }
    }
    return answer;
}

solution(	10, 2)