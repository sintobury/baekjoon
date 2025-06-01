function solution(n, k) {
    const answer = [];
    // 1~n까지 수를 담은 배열
    const people = Array.from({ length: n }, (el, i) => i + 1);
    // caseNum = n!
    let caseNum = people.reduce((ac, v) => ac * v, 1)
    
    while (answer.length < n) {
        // 픽스 할 다음 숫자들의 경우의 수 찾기
        caseNum = caseNum / people.length;
        // k가 idx에 접근하지만 1부터 시작하므로 1을 빼기
        answer.push(...people.splice(Math.floor((k - 1) / caseNum), 1));
        // splice로 people에서 하나 빼서 가져와 answer에 담기
        // 숫자 픽스 후 다음 경우의 수는 나머지에 해당하므로 업데이트
        k = k % caseNum;
    }

    return answer;
}