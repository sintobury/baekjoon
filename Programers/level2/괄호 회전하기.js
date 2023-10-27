function solution(s) {
    let answer = 0;
    if(s.length % 2 === 1){
        return answer;
    }
    let stack = [];
    let round = s.concat(s);
    for(let j=0; j<s.length; j++) {
        let turn = round.slice(j,s.length+j);
        console.log(turn)
        let isNotAnswer = false;
        for(let i=0; i<s.length; i++) {
            let now = turn[i];
            if(stack.length === 0 && now === ")" || stack.length === 0 && now === "}" || stack.length === 0 && now === "]") {
                isNotAnswer = true;
                break;
            } else if(now === "{" || now === "(" || now === "[" ) {
               stack.push(now);
            } else {
                let lastwindow = stack.pop();
                console.log({lastwindow, now})
                if(lastwindow === "(" && now === ")") {
                    continue;
                } else if(lastwindow === "{" && now === "}") {
                    continue;
                } else if(lastwindow === "[" && now === "]") {
                    continue;
                } else {
                    isNotAnswer = true;
                    break;
                }
            }
        }
        if(!isNotAnswer) {
            answer++;
        }
        
        console.log({answer,stack})
    }
    return answer;
}

console.log(solution(			"}}}"))