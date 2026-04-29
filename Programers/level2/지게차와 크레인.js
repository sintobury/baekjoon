function solution(storage, requests) {
    //덩어리기준 테두리에 있는 해당 요소 제거 -> 지게차 -> 단일 알파벳 ex)A
    //존재하는 모든 해당 요소를 제거 -> 크레인 -> 연속된 알파벨 ex)BB
    //요청목록 전부 수행후 남은 컨테이너 수를 리턴
    // 수정 -> 알파벳탐색 -> 해당 화물이 외곽으로 나갈 수 있는지 확인할것, (BFS)


    let [w,h] = [storage[0].length, storage.length];
    let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let removed = Array.from(Array(h), () => new Array(w).fill(0));
    let total = w * h;

    for(const request of requests){
        // 크레인 요청
        if(request.length === 2){
            for(let i = 0; i < h; i++){
                for(let j = 0; j < w; j++){
                    if(storage[i][j] === request[0] && removed[i][j] === 0){
                        removed[i][j] = 1;
                        total -= 1;
                    }
                }
            }
        } else {
            const checklist = [];
            for(let i = 0; i < h; i++){
                for(let j = 0; j < w; j++){
                    if(storage[i][j] === request && removed[i][j] === 0){
                        checklist.push([i, j]);
                    }
                }
            }

            const removeList = [];
            
            for(const [y, x] of checklist){
                
                if(y === 0 || y === h - 1 || x === 0 || x === w - 1){
                    removeList.push([y,x]);
                    continue;
                }

                let canRemove= false;
                const q = [[y,x]];
                const visited = Array.from({length: h}, () => Array(w).fill(false));
                visited[y][x] = true;
                let head = 0; 

                while(head < q.length){
                    const [y,x] = q[head++];

                    for(const [dy, dx] of direction){
                        const ny = y + dy;
                        const nx = x + dx;

                        // 다음 칸이 지워진 빈 공간(1)이고 방문하지 않은 곳일 때만 이동
                        if(ny >= 0 && ny < h && nx >= 0 && nx < w){
                            if(removed[ny][nx] === 1 && !visited[ny][nx]){
                                // 그 빈 공간이 맵의 가장자리면 외곽 도달 성공 (조기 종료)
                                if(ny === 0 || ny === h - 1 || nx === 0 || nx === w - 1){
                                    canRemove = true;
                                    break;
                                }
                                visited[ny][nx] = true;
                                q.push([ny, nx]);
                            }
                        }
                    }
                    // 탈출구를 찾으면 종료
                    if(canRemove){
                        break
                    };
                }
                if(canRemove){
                    removeList.push([y,x])
                }

            }
            
            for(const [y, x] of removeList){
                removed[y][x] = 1;
                total -= 1;
            }
        }
    }
    
    return total;

}

console.log(solution(["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"]))