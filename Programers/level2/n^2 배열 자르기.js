function solution(n, left, right) {
    let answer = [];
    for(let i=left; i<right+1; i++) {
        let matrix = Math.floor(i/n);
        let row = i%n;
        if(matrix >= row) {
            answer.push(matrix+1);
        } else {
            answer.push(row+1);
        }
    }
    return answer
}

console.log(solution(	4, 7, 14))