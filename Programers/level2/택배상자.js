function solution(order) {
    let answer = 0;
    const stack = [];
    let next = 0;
    const isInSub = new Array(order.length+1).fill(false);
    let i=1;
    while(next<order.length) {
        if(i === order[next]) {
            next++;
            answer++;
        } else if(stack[stack.length-1] === order[next]) {
            next++;
            answer++;
            let out = stack.pop();
            isInSub[out] = false;
            i--;
        } else if(isInSub[order[next]]) {
            break;
        } else {
            stack.push(i);
            isInSub[i] = true;
        }
        i++;
        console.log(stack, isInSub, answer)
    }
    return answer;
}

console.log(solution([3, 5, 4, 2, 1]))