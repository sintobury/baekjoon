function solution(n, arr1, arr2) {
    const solved1 = arr1.map((el) => el.toString(2).padStart(n,'0'));
    const solved2 = arr2.map((el) => el.toString(2).padStart(n,'0'));
    let answer = new Array(n).fill(0).map(() => new Array(n).fill('#'));
    
    // |연산을 활용하면 훨씬 짧

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(solved1[i][j] === '0' && solved2[i][j] === '0'){
                answer[i][j] = ' ';
            } else {
                continue;
            }
        }
    }
    //answer.forEach((el,idx,arr) => arr[idx] = el.join(''));
    answer = answer.map((el) => el.join(''));
    return answer;
}

console.log(solution(5,[9, 20, 28, 18, 11],	[30, 1, 21, 17, 28]))