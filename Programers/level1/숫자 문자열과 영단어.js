function solution(s) {
    let wordMap = new Map();
    let wordList = 
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for(let i=0; i<wordList.length; i++){
        wordMap.set(wordList[i], i);
    }
    
    let answer ='';
    let idx = 0;
    while(idx < s.length){
        if(!isNaN(Number(s[idx]))){
            answer += s[idx];
            idx++;
        } else {
            for(let i=3; i<6; i++){
                let word = s.slice(idx,i+idx);
                let wordNum = wordMap.get(word);
                if(wordNum !== undefined){
                    answer += wordNum;
                    idx += i;
                    break;
                }
            }
        }
    }
    return Number(answer);
}

console.log(solution("one4seveneight"))