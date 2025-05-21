function solution(weights) {
    const ratio = [1, 3/2, 2, 4/3];
    const list = {};
    let answer = 0;
    
    weights.sort((a, b) => b - a);
    //정렬 해둬서 2/3, 1/2, 3/4 비율은 필요없음
    for(const el of weights) {
        ratio.forEach(x => {
            const couple = el * x;
            if(list[couple]) answer += list[couple];
            //커플이 리스트내에 있으면 커플의 수만큼 경우의 수 증가
        });
        list[el] = (list[el] || 0) + 1;
        //리스트에 같은 무게의 수를 저장
    }
    return answer;
}

console.log(solution(	[100, 100, 100, 150, 150, 200, 300]))