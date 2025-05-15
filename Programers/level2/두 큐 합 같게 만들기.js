function solution(queue1, queue2) {
    let sum1 = queue1.reduce((prev, curr) => prev + curr) 
    let sum2 = queue2.reduce((prev, curr) => prev + curr);
    //half가 자연수가 아니면 불가능
    if((sum1 + sum2) % 2 !== 0) {
        return -1
    }
    const half = (sum1 + sum2 ) / 2;
    let limit = queue2.length;
    let count = 0;
    let answer = false;
    let queue1Idx = 0;
    let queue2Idx = 0;
    while(limit > 0) {
        console.log(queue1[queue1Idx], queue2[queue2Idx])
        if(sum1 === half) {
            answer = true;
            break;
        } else if(sum1 > half) {
            //shift()는 시간복잡도가 O(n)이라 길면 연산에 불리 => idx로 그냥 추적
            sum1 -= queue1[queue1Idx];
            queue1Idx++;
            count++;
        } else {
            //push()는 시간복잡도가 O(1)이라 적용
            queue1.push(queue2[queue2Idx])
            sum1 += queue2[queue2Idx];
            queue2Idx++;
            count++;
            limit--;
        }
    }
    return answer ? count : -1; //정답인경우와 반복문 끝나기만 한경우 구분
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));