function solution(video_len, pos, op_start, op_end, commands) {
    //prev 버튼 10초전으로 이동 현재위치가 10초미만인경우 영상 처음위치로(0분0초)
    //next 버튼 10초후로 이동 남은시간이 10초미만인경우 영상 마지막위치로(동영상길이와 같음)
    //오프닝 건너뛰기 현재위치가 오프닝 구간안에 있으면 오프닝 끝나는 위치로 이동
    // video_len = 동영상 길이, pos = 현재위치, op_start = 오프닝구간 시작점, op_end = 오프닝구간 끝점, commands = 사용자 입력 배열
    // commands의 입력 후 최종 동영상 위치를 'mm:ss' 형태로 리턴
    // commands에는 next, prev만 있음 오프닝구간은 자동스킵
    const transfer = (time) => {
        let split = time.split(':');
        return Number(split[0])*60 + Number(split[1]);
    }
    const videoEnd = transfer(video_len);
    let now = transfer(pos);
    const [opStart, opEnd] = [transfer(op_start), transfer(op_end)];
    //시작점이 오프닝구간이면 바로 스킵
    if(opStart <= now && now < opEnd){
        now = opEnd;
    }

    for(const command of commands){
        if(command === 'prev'){
            now -= 10;
            Math.min(now,0);
        } else {
            now += 10;
            Math.max(now,videoEnd);
        }

        if(opStart <= now && now < opEnd){
            now = opEnd;
        }
    }
    const [m, s] = [String(Math.floor(now/60)), String(now%60)];
    return `${m.padStart(2,"0")}:${s.padStart(2,"0")}`

}

console.log(solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"]))