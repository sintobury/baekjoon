function solution(k, tangerine) {
    const maxSize = Math.max(...tangerine);
    const size = new Array(maxSize+1).fill(0);
    for(let i=0; i<tangerine.length; i++) {
        size[tangerine[i]]++;
    }
    const nonezero = size.filter((el)=> el !== 0);
    const sortbynum = nonezero.sort((a,b)=> b-a);
    let sum = 0;
    let idx = 0;
    while(sum<k){
        sum+=sortbynum[idx];
        idx++;
    }
    return idx;
}

console.log(solution(	2, [1, 1, 1, 1, 2, 2, 2, 3]))