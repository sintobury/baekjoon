function solution(survey, choices) {
    const characterList = ['RT','CF','JM','AN'];
    const gradeMap = new Map();
    /*for(const character of characterList){
        gradeMap.set(character, 0);
    }*/
    
    for(let i=0; i<survey.length; i++){
        const [disagree, agree] = survey[i].split('');
        const questionGrade = choices[i] - 4;
        let grade;
        if(questionGrade > 0) {
            grade = gradeMap.get(agree) ?? 0;
            grade += questionGrade;
            gradeMap.set(agree, grade);
        } else {
            grade = gradeMap.get(disagree) ?? 0;
            grade += Math.abs(questionGrade);
            gradeMap.set(disagree, grade);
        }
    }
    
    let answer = '';
    for(let i=0; i<characterList.length; i++){
        const [a,b] = characterList[i].split('');
        const [aGrade,bGrade] = [gradeMap.get(a) ?? 0, gradeMap.get(b) ?? 0];
        aGrade < bGrade ? answer += b : answer += a;
    }
    return answer;
}