function solution(prices) {
    const stack = [];
    const answerList = new Array(prices.length).fill(0);
    for(let i=0; i<prices.length; i++) {
        while(stack.length > 0 && prices[i] < prices[stack[stack.length-1]]) {
            const decreaseIndex = stack.pop();
            answerList[decreaseIndex] = i - decreaseIndex;
        }
        stack.push(i);
    }

    while(stack.length > 0) {
        const increaseIndex = stack.pop();
        answerList[increaseIndex] = prices.length - 1 - increaseIndex;
    } 
    
    return answerList
}

console.log(solution([1, 2, 3, 2, 3]))