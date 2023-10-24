function solution(n) {
    let first = 0;
    let second = 1;
    let fibo;
    for(let i=2; i<=n; i++) {
        fibo = first%1234567 + second%1234567;
        first = second;
        second = fibo;
    }
    return fibo%1234567;
}
console.log(solution(3))