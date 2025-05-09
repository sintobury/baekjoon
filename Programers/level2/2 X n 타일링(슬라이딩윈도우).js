function solution(n) {
    let first = 1;
    let second = 2;
    if(n === 2) {
        return second;
    } else if(n === 1) {
        return first;
    }
    let fibo;
    for(let i=2; i<n; i++) {
        if(first > 1000000007) {
            first = first%1000000007
        }
        if(second > 1000000007) {
            second = second%1000000007
        }
        fibo = first + second;
        first = second;
        second = fibo;
    }
    return fibo%1000000007;
}