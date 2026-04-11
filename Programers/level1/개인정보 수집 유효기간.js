function solution(today, terms, privacies) {
    const transfer = (date) => {
        const [year, month, day] = date.split('.').map(Number);
        return day + month*28 + year*12*28
    }
    
    today = transfer(today);

    const termMap = new Map();
    for(const term of terms){
        const [termName, validityPeriod] = term.split(' ');
        termMap.set(termName, Number(validityPeriod));
    }
    
    const answer = [];
    for(let i=0; i<privacies.length; i++){
        let [collectedDate, termName] = privacies[i].split(' ');
        collectedDate = transfer(collectedDate);
        let endDate = collectedDate + termMap.get(termName)*28;
        
        if(endDate <= today){
            answer.push(i+1);
        }
    }
    return answer;
}

console.log(solution(	"2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))