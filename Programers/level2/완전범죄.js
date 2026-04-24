function solution(info, n, m) {
    let maxB = 0;
    info.forEach((el) => maxB += el[1]);
    let total = info.length;
    let answer = n;
    let check = new Array(total+1).fill(0).map(() => new Array(maxB+1).fill(n));
    
    const dfs = (idx, a, b) => {
       
        let minA = check[idx][b];
        if(minA <= a){
            return;
        } else {
            check[idx][b] = a;
        }

        if(a >= n){
            return;
        }
        if(b >= m){
            return;
        }

        if(idx === total){
            if(a < answer){
                answer = a;
            }
            return;
        }
        dfs(idx + 1, a + info[idx][0], b);
        dfs(idx + 1, a, b + info[idx][1]);
    }

    dfs(0,0,0)

    return answer === n ? -1 : answer;
      
}

console.log(solution([[1, 2], [2, 3], [2, 1]], 4, 4))