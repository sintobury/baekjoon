function solution(progresses, speeds) {
    let works = progresses.slice();
    let rate = speeds.slice();
    let answer = [];
    while(works.length > 0) {
        works = works.map((el,idx)=>el+rate[idx]);
        console.log(works)
        if(works[0]>=100) {
            let unDone = works.findIndex((el)=>el<100);
            if(unDone !== -1) {
                answer.push(unDone);
                works = works.slice(unDone);
                rate = rate.slice(unDone);
            } else {
                answer.push(works.length);
                break;
            }
        }
    }
    return answer;
}

console.log(solution(	[90, 90, 90, 90],[30, 1, 1, 1]))