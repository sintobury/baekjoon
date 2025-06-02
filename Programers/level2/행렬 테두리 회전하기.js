function solution(rows, columns, queries) {
    const field = Array.from({length: rows + 1}, () => [])
    let k = 1;
     for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            field[i][j] = k++   
        }
    }
    // 숫자 채워서 배열 만들기
    
    let result = [];
    //회전 진행
    queries.forEach(query => {
        const [row, col, drow, dcol] = query
        let [nr, nc] = [row, dcol] // 현재 위치 (오른쪽 위부터)
        const cddt = [field[nr][nc]] // 시작 위치 값 저장
        while (nc > col) cddt.push(field[nr][nc] = field[nr][--nc])
        while (nr < drow) cddt.push(field[nr][nc] = field[++nr][nc])
        while (nc < dcol) cddt.push(field[nr][nc] = field[nr][++nc])
        while (nr > row) cddt.push(field[nr][nc] = field[--nr][nc])
        field[nr + 1][nc] = cddt[0] // 시작 위치 값 입력
        result.push(Math.min(...cddt)) // 회전 요소 중 최솟값
    })
    
    return result
}