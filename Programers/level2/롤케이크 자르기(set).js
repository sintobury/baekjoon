function solution(topping) {
    const end = topping.length;
    let answer = 0;
    if(end === 1) {
        return answer;
    }
    
    const left = new Set();
    const right = new Set();
    const count = new Array(10001).fill(0);

    topping.map((top) => {
        left.add(top);
        count[top]++;
    })

    topping.map((top) => {
        if(count[top] > 0) {
            count[top]--;
        }
        if(count[top] == 0) {
            left.delete(top);
        }
        right.add(top);
        if(left.size === right.size) {
            answer++;
        }
    })

    return answer;
}

console.log(solution([1, 2, 3, 1, 4]))