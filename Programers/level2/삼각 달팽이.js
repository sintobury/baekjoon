function solution(n) {
    const answer = new Array(n).fill(0).map((el,idx) => new Array(idx+1).fill(0));
    //삼각형 사이즈만큼의 배열 생성
    let col = 0;
    let row = -1;
    //안 쪽 삼각형으로 좌표 옮길때 더하고 시작해야해서 -1부터 시작
    let num = 0;
    //좌표를 옮기면서 num을 증가해 배열에 저장
    while(n>0) {
        for(let i=0; i<n; i++) {
            //위에서 좌측 끝으로 내려가는 대각선
            row++;
            num++;
            answer[row][col] = num;
        }
        for(let i=0; i<n-1; i++) {
            //왼쪽에서 좌측끝으로 가는 밑변
            //반복수는 왼쪽 끝 다음부터 시작이기 때문에 반복수 1줄이기
            col++;
            num++;
            answer[row][col] = num;
        }           
        for(let i=0; i<n-2; i++) {
            //오른쪽 밑 끝에서 위쪽 끝으로 올라가는 대각선
            //오른쪽 끝과 제일 위를 제외해야 하므로 반복수 2줄이기
            row--;
            col--;
            num++;
            answer[row][col] = num;
        }
        //한번 삼각형 만들고 난 후에는 삼각형 사이즈가 3줄어듬
        n -= 3;
    }
    //2차원 배열이므로 flat으로 1차원배열에 풀어 담기
    return answer.flat();
}