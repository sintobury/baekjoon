function solution(record) {
    const uid = {};
    for(let i=0; i<record.length; i++) {
        let log = record[i].split(" ");
        if(log[0] === 'Enter'){
            if(!uid[log[1]] || uid[log[1]] !== log[2]) {
                uid[log[1]] = log[2];   
            }
            continue;
        }
        if(log[0] === 'Change') {
            uid[log[1]] = log[2];
        }
    }
    const answer = record.map((el) => {
        let log = el.split(" ");
        if(log[0] === 'Enter') {
            return `${uid[log[1]]}님이 들어왔습니다.`
        }
        if(log[0] === 'Leave') {
            return `${uid[log[1]]}님이 나갔습니다.`
        }
        return '';
    }).filter((el) => el !== '');
    return answer;
}