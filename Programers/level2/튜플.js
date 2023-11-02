function solution(s) {
    let list = s.split("{").join("[").split("}").join("]");
    let listArr = JSON.parse(list)
    let sort = listArr.slice().sort((a,b)=>a.length-b.length);
    let answer = [];
    for(let i=0; i<sort.length; i++) {
        if(answer.length === 0) {
            answer.push(sort[i][0]);
        } else {
            let next = sort[i].find((el)=>!answer.includes(el));
            answer.push(next);
        }
    }
    return answer;
}
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))