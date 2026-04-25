function solution(info, n, m) {
    // 최솟값에 배열사용 => 높은확률로 dp, 단계별 누적 저장 => dp, dp면 처리해야 할 값부터 생각, 저장해야할 값 생각, 구해야하는 값을 저장하는 느낌
    //dfs -> 백트래킹 문제, bfs -> 미로찾기류, 극단적 케이스는 그리디 대신 dp -> 그리디는 극단적 케이스가 입력값으로 안들어옴
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