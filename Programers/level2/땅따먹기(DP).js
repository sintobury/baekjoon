function solution(land) {
    const answerList = land.slice();
    for(let i=1;i<answerList.length;i++){
     answerList[i][0]+=Math.max(answerList[i-1][1],answerList[i-1][2],answerList[i-1][3])
     answerList[i][1]+=Math.max(answerList[i-1][0],answerList[i-1][2],answerList[i-1][3])
     answerList[i][2]+=Math.max(answerList[i-1][0],answerList[i-1][1],answerList[i-1][3])
     answerList[i][3]+=Math.max(answerList[i-1][0],answerList[i-1][1],answerList[i-1][2])
    }
    
    const answer = answerList.pop();
  
    return Math.max(...answer)
}

console.log(solution(([[1,2,3,5],[5,6,7,8],[4,3,2,1]])))