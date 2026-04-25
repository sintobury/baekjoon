function solution(storage, requests) {
    //덩어리기준 테두리에 있는 해당 요소 제거 -> 지게차 -> 단일 알파벳 ex)A
    //존재하는 모든 해당 요소를 제거 -> 크레인 -> 연속된 알파벨 ex)BB
    //요청목록 전부 수행후 남은 컨테이너 수를 리턴
    let [w,h] = [storage[0].length, storage.length];
    let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let removed = Array.from(Array(h), () => new Array(w).fill(0));

    //지게차 요청 로직
    const carReq = (visited, req, x, y) => {
        if(visited[y][x]){
            return
        }
        visited[y][x] = 1;

        //제거한 부분인 경우 상하좌우 방향에서 방문하지 않은곳 체크
        if(removed[y][x]){
            for(const dir of direction){
                let [nextY, nextX] = [y+dir[0], x+dir[1]];
                if(nextX < 0 || nextX >= w || nextY < 0 || nextY >= h){
                    continue;
                } else {
                    if(visited[nextY][nextX]){
                        continue;
                    } else {
                        carReq(visited, req, nextX, nextY);
                    }
                }
            }
        }
        
        if(storage[y][x] === req){
            removed[y][x] = 1;
        }
        return
    }

    for(const request of requests){
        //크레인 요청
        if(request.length === 2){
            for(let i=0; i<h; i++){
                for(let j=0; j<w; j++){
                    if(storage[i][j] === request[0]){
                        removed[i][j] = 1;
                    }
                }
            }
            
        } else {
            //지게차 요청
            let visited = Array.from(Array(h), () => new Array(w).fill(0));
            for(let i=0; i<h; i++){
                for(let j=0; j<w; j++){
                    //테두리 기준 진행
                    if(i === 0 || i === h-1 || j === 0 || j === w-1){
                        carReq(visited, request, j, i);
                    }
                }
            }
        }
    }

    let remained = 0;
    for(const line of removed){
        for(let i=0; i<w; i++){
            if(line[i] === 0){
                remained += 1;
            }
        }
    }

    return remained;
}

console.log(solution(["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"]))