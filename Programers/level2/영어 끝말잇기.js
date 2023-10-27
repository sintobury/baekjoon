function solution(n, words) {
    const answer = [0,0];
    let saidwords = {};
    let person = 1;
    let order = 1;
    let lastword = words[0][0];
    for(let i=0; i<words.length; i++) {
        const word = words[i]
        if(saidwords[word] || lastword[lastword.length-1] !== word[0]){
            answer[0] = person;
            answer[1] = order;
            break;
        } else {
            lastword = word;
            saidwords[word]=true;
            person++
            if(person>n) {
                person = 1;
                order++;
            }
        }
    }
    return answer;
}

console.log(solution(	2, ["hello", "one", "even", "never", "now", "world", "draw"]))