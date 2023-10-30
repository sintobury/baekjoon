function solution(citations) {
    const n = citations.length;
    const sort = citations.slice().sort((a,b)=>a-b);
    let answer =0;
    for(let i=1; i<n+1; i++) {
        const high = sort.filter((el)=> el>=i ).length;
        if( high >= i && n-high <= i ) {
            answer = i;
        }
    }
    return answer;
}

console.log(solution(	[3, 0, 6, 1, 5]))