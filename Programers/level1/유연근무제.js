function solution(schedules, timelogs, startday) {
    let N = schedules.length;
    let answer = N;
    for(let i=0; i<N; i++){
        const schedule = schedules[i];
        const timelog = timelogs[i];
        const [h,m] = [Math.floor(schedule/100), schedule%100];
        const limit = m + 10 > 59 ? (h+1)*100 + (m+10)%60 : schedule+10;
        for(let j=0; j<timelog.length; j++){
            const day = (startday-1+j) % 7
            if(day === 5 || day === 6){
                continue;
            } else {
                if(timelog[j] > limit){
                    answer--;
                    break;
                }
            }
        }
    }
    return answer;
}

console.log(solution([700, 800, 1100], [[710, 2359, 1050, 700, 650, 631, 659], [800, 801, 805, 800, 759, 810, 809], [1105, 1001, 1002, 600, 1059, 1001, 1100]], 5))