function solution(m, n, board) {
    board = board.map(el => el.split(''));

    while (true) {
        let founded = [];

        // 찾기
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                let friend = board[i][j];
                if (friend && friend === board[i][j - 1] && friend === board[i - 1][j - 1] && friend === board[i - 1][j]) {
                    founded.push([i, j]);
                }
            }
        }

        if (founded.length === 0) {
            return founded.concat(...board).filter(v => v === 0).length;
        }
        // 부수기
        founded.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1] - 1] = 0;
            board[a[0] - 1][a[1] - 1] = 0;
            board[a[0] - 1][a[1]] = 0;
        });

        // 재정렬
        for (let i = m - 1; i > 0; i--) {
            if (! board[i].some(v => v === 0)) continue;
            // 부숴진 블록없으면 그 행 넘기기
            for (let j = 0; j < n; j++) {//가로
                for (let k = i - 1; k >= 0 && board[i][j] === 0; k--) {//세로
                    //0인 곳 찾고 그 윗칸들 중에서 0이 아닐때 밑으로 내리기
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}