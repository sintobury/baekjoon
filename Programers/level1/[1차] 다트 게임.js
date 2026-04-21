function solution(dartResult) {
    let scoreList = [];
    let bonus = new Set(['S','D','T'])
    let dartStart = 0;
    for(let i=0; i<dartResult.length; i++){
        let str = dartResult[i];
        if(bonus.has(str)){
            let score = Number(dartResult.slice(dartStart,i));
            if(str === 'D'){
                score = Math.pow(score,2);
            } else if(str === 'T'){
                score = Math.pow(score,3);
            }
            scoreList.push(score);
            
        }

        if(str ===  '*'){
            scoreList[scoreList.length-1] *= 2;
            if(scoreList.length !== 1){
                scoreList[scoreList.length-2] *= 2
            }
        } else if(str === '#'){
            scoreList[scoreList.length-1] *= -1;
            
        }

        if(Number.isNaN(Number(str))){
            dartStart = i+1;
        }
    }
    
    let answer = 0;
    scoreList.forEach((score) => answer += score);
    return answer;
}

console.log(solution('1D2S3T*'))