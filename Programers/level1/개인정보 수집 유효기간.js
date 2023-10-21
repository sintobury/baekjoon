function solution(today, terms, privacies) {
    const answer = [];
    const todayarr = today.split(".");
    const todaynum = Number(todayarr[0])*12*28 + (Number(todayarr[1]))*28 + Number(todayarr[2]);
    // console.log("todaynum",todaynum)
    const termObj = {};
    for(let i=0; i<terms.length; i++) {
        const term = terms[i].split(" ");
        termObj[term[0]] = Number(term[1]);
    }
    console.log(termObj)
    for(let i=0; i<privacies.length; i++) {
        const privacy = privacies[i].split(" ");
        const privacyDay = privacy[0].split(".");
        const privacyNum = Number(privacyDay[0])*12*28 + (Number(privacyDay[1]))*28 + Number(privacyDay[2]);
        const expirelength = termObj[privacy[1]]*28
        const expiredNum = privacyNum + expirelength
        // console.log({privacyNum, expirelength, expiredNum, todaynum})
        if(expiredNum <= todaynum) {
            answer.push(i+1);
        }
    }
    return answer;
}

console.log(solution(	"2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))