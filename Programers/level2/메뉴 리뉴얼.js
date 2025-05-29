function solution(orders, course) {
    // 조합 만들기 함수
    const Combinations = (arr, num) => {
        const results = [];
        
        if (num === 1) return arr.map(v => [v]);

        arr.forEach((select, i, origin) => {
            // 조합 안한 나머지
            const remainder = origin.slice(i + 1);
            // 재귀로 조합을 만들기
            const combinations = Combinations(remainder, num - 1);
            // 조합을 만들 때 알파뱃들을 한 덩어리로 묶기
            const combine = combinations.map(v => [select, ...v].sort().join(""));
            // 조합 덩어리들을 작은 덩어리부터 큰 덩어리까지 한 배열에 합치기
            results.push(...combine);
        });

        return results;
    }

    const answer = [];
    for(let i=0; i<course.length; i++) {
        const map = {};
        let max = 0;
        orders.forEach(order=>{
            //코스의 음식 수에 따라 조합을 만들기
            Combinations(order.split(""), course[i]).forEach(com=>{
                // 조합상 map에 저장안되어 있으면 1로 저장
                if (!map[com]) map[com] = 1;
                // 있으면 조합 수를 증가
                else map[com]++;
            });

            for (const k in map) {
                //조합 수가 max보다 큰 경우 max를 업데이트
                if (map[k] > max) max = map[k];
            }
        });
        
        for (const k in map) {
            //조합의 수가 max면서 조합이 없는 경우는 제외하고 후보에 등록
            if (map[k] === max && max > 1) answer.push(k);
        }
    }
    //사전순으로 후보를 정렬
    return answer.sort();
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]))