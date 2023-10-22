function solution(x, y, n) {
    if(x === y) return 0;
    const dp = new Array(y+1).fill(Infinity);
    dp[x] = 0;
    for(let i=x; i<=y; i++) {
        dp[i+n] = Math.min(dp[i+n], dp[i]+1)
        dp[i*2] = Math.min(dp[i*2], dp[i]+1)
        dp[i*3] = Math.min(dp[i*3], dp[i]+1)
        //dp[i]+1 = 해당 숫자에서 가능한 수단으로 만들 수 있으면 +1
        //dp[x]부터 시작해 만들 수 있는 dp[i]에 도달하기에 필요한 연산수 추가 //무한대와 비교함 
        //순차적으로 넘어가며 기존값과 비교해 최솟값으로 수단을 넣음
        console.log(dp)
    }
    return dp[y] !== Infinity ? dp[y] : -1;
}

console.log(solution(2, 6, 4))