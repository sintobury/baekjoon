function solution(book_time) {
    // 시작과 끝 구분을 위해 시간을 분단위로 합산 
    const change = (time) => {
        let start = time[0].split(':');
        let end = time[1].split(':');
        let newStart = Number(start[0])*60 + Number(start[1]);
        let newEnd = Number(end[0])*60 + Number(end[1])+ 10;
        return [newStart, newEnd];
    }
    let sorted = book_time.map((el) => change(el)).sort((a,b) => a[0] - b[0]);
    // 시작점이 낮은 순으로 정렬
    let needNewRoom = [sorted[0]];
    // 첫손님 방에 넣기
    for(let i=1; i<sorted.length; i++) {
        // 첫손님 이후 손님 순회
        let needRoom = true;
        for(let j=0; j<needNewRoom.length; j++) {
            // 방을 예약한 손님
            let booked = needNewRoom[j];
            console.log(sorted[i], booked)
            if(booked[1] <= sorted[i][0]){
                // 예약 시간을 봤을 때 예약 손님들 중 청소끝난 시간이후에 들어올 손님은 방 추가 필요 X
                needNewRoom[j] = sorted[i];
                // 시작점이 낮은 순으로 정렬해 두었으므로 다음 예약 손님으로 업데이트해도 오류 X
                needRoom = false;
                break;
                // 방 필요 없으니 이후는 볼필요 없음
            }
        }
        if(needRoom) {
            // 방 필요 여부 확인 후 방이 필요한 경우에 추가
            needNewRoom.push(sorted[i])
        }
    }
    // 필요한 방의 수 
    return needNewRoom.length;
}

console.log(solution([["09:10", "10:10"], ["10:20", "12:20"]]))