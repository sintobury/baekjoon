function solution(citations) {
    const n = citations.length;
    const sort = citations.slice().sort((a,b)=>a-b);
    let answer =0;
    for(let i=0; i<n; i++) {
        const h = sort[i];
        const high = sort.filter((el)=> el>=h ).length;
        if( high >= h && n-high <= h ) {
            answer = h;
        }
    }
    return answer;
}

console.log(solution(	[3, 0, 6, 1, 5]))