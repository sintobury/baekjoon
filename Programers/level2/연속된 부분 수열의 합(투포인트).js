function solution(sequence, k) {
    let answer = [0,1000000]; 
    let left = 0;
    let right = 0;
    let sum = sequence[left];
    while(right < sequence.length ) {
        if (sum < k) {
            right++;
            sum += sequence[right];
        } else if(sum > k) {
            sum -= sequence[left];
            left++;
        } else {
            const length = answer[1]-answer[0];
            if(length > right-left){
                answer = [left, right];
            }
            sum -= sequence[left];
            left++;
            right++;
            sum += sequence[right];
        }
    }
    return answer;
}

console.log(solution([1, 1, 1, 2, 3, 4, 5], 5))