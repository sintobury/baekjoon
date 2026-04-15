function solution(lottos, win_nums) {
    let min = 0;
    let max = 6;
    for(const num of lottos){
        if(num === 0){
            continue;
        }
        if(win_nums.includes(num)){
            min++;
        } else {
            max--;
        }
    }
    
    let highRank = max < 2 ? 6: 7-max;
    let lowRank = min < 2 ? 6 : 7-min;
    return [highRank, lowRank]
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))