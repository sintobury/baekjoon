function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1);
    const stack = [];
    for(let i=0; i<numbers.length; i++) {
        const now = numbers[i];
        while (stack && numbers[stack.at(-1)] < now){
            answer[stack.pop()] = now;
        }
        stack.push(i);
    }
    return answer;
}