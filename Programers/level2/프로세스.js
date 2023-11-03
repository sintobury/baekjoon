function solution(priorities, location) {
    let Pobj = {};
    let queue = [];
    for(let i=0; i<priorities.length; i++) {
        Pobj[i] = priorities[i];
        queue.push(i);
    }
    console.log(Pobj,queue)
    let answer = 1;
    let isNotLocation = true;
    while(isNotLocation) {
        let now = queue.shift();
        console.log(Pobj[now],queue)
        let left = queue.map((el)=>Pobj[el]);
        if(left.some((el)=>el>Pobj[now])){
            queue.push(now);
        } else {
            if(now === location) {
                break;
            }
            answer++;
        }
        console.log(queue);
    }
    console.log(answer)
    return answer;
}

solution(	[1, 1, 9, 1, 1, 1], 0)