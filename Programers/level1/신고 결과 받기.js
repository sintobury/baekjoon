function solution(id_list, report, k) {
    const data = {};
    for(const user of id_list){
        let reportedSet = new Set();
        let reportSet = new Set();
        let resultMail = 0;
        data[user] = {
            reportedSet, reportSet, resultMail
        }
    }
    //신고 받고 데이터 정리
    for(const reporting of report){
        const [reporter, reported] = reporting.split(' ');
        data[reporter].reportSet.add(reported);
        data[reported].reportedSet.add(reporter);
    }
    //신고 결과 메일 결정
    for(const user of id_list){
        let reportedCount = data[user].reportedSet.size;
        if(reportedCount >= k ){
            data[user].reportedSet.forEach((reporter) => data[reporter].resultMail++)
        }
    }
    
    let answer = id_list.map((user) => data[user].resultMail);
    return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2))