function solution(board) {
    let answer = -1;
    const n = board.length; 
    const m = board[0].length; 
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]; 
    const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
    let start = [0,0];
    for (let y=0; y<n; y++) {
        for (let x=0; x<m; x++) {
            if (board[y][x] === "R") {
                start[1] = x;
                start[0] = y;
            }
        }
    }


    const queue = [[start[0], start[1], 0]]; 
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {  
        const [y, x, count] = queue.shift();
        if (board[y][x] === 'G') {
            answer = count;
            break; 
        }

        for (let [ydir, xdir] of dir) {
            let nextY = y + ydir;
            let nextX = x + xdir;   

            // D만날때까지 쭉 밀기
            while(0<=nextX && nextX<m && 0<=nextY && nextY<n && board[nextY][nextX] !== "D"){
                nextX += xdir;
                nextY += ydir;
            }
            // D좌표 직전좌표로 다시 바꾸기
            nextX -= xdir;
            nextY -= ydir;
            
            // 도착지점에 온적이 없으면 이동목록에 넣어주기
            if(!visited[nextY][nextX]){
                queue.push([nextY, nextX, count+1]);
                visited[nextY][nextX] = true;
            }
        }
    }
    return answer;
}

console.log(solution(	["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]))