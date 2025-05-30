function solution(m, musicinfos) {
    // 재생된 음악 길이 측정함수
    const calculate = (start, end) => {
        let startT = start.split(':');
        let endT = end.split(':');
        let newStart = Number(startT[0])*60 + Number(startT[1]);
        let newEnd = Number(endT[0])*60 + Number(endT[1]);
        return newEnd - newStart;
    }
    // 코드에서 #이 붙은 경우를 변환
    const change = (code) => {
        let answer = code;
         for(let i=0; i<answer.length; i++) {
            let sub = answer.substring(i,i+2);
            if(sub === "A#"){
                answer = answer.replace("A#",'a')
            } else if(sub === 'B#'){
                answer = answer.replace("B#",'b')
            } else if(sub === 'C#'){
                answer = answer.replace("C#",'c')
            } else if(sub === 'D#'){
                answer = answer.replace("D#",'d')
            } else if(sub === 'F#'){
                answer = answer.replace("F#",'f')
            } else if(sub === 'G#'){
                answer = answer.replace("G#",'g')
            } 
        }
        return answer;
    }
    // 재생된 음악들을 저장할 배열
    let codeList = [];

    // 제공된 리스트를 변환
    for(let music of musicinfos){
        let [start, end, name, code] = music.split(',');
        let time = calculate(start,end);
        let fullCode = '';
        code = change(code);
        m = change(m);

        // 재생된 기간만큼 코드를 붙여서 풀코드로 변환
        for(let i=0; i<time; i++){
            fullCode += code[i%code.length];
        }
        // 변환된 코드들은 길이와 이름, 풀코드를 저장
        codeList.push({Name:name, FullCode:fullCode, Time:time});
    }
    let answer = '';
    let maxTime = 0;
    for(let track of codeList){
        // 변환해 저장해둔 리스트에서 m이 포함되는지 확인
        let idx = track.FullCode.indexOf(m);
        // maxTime을 통해 재생된 길이가 가장 긴 음악을 정답으로 업데이트
        if(idx !== -1 && maxTime < track.Time){
            answer = track.Name;
            maxTime = track.Time;
        }
    }
    return answer === "" ? '(None)': answer;
}

console.log(solution("A", ["12:00,12:01,Song,BA"]))