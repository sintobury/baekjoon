function solution(arr) {
    let answer = [0,0];
    //재귀 함수 만들기
    const quard = (row, col, len) => {
        //재귀 조건
        let canSum = true;
        for(let i=row; i<row+len; i++) {
            if(!canSum){
                break;
            }
            for(let j=col; j<col+len; j++){
                if(arr[row][col] !== arr[i][j]){
                    //영역내 숫자들이 다른 경우 재귀조건 성립
                    canSum = false;
                    break;
                }
            }
        }
        
        let half = len / 2;
        
        if(!canSum) {
            //4등분해서 사분면을 각 영역으로 재귀
            quard(row, col, half) //2사분면
            quard(row, col+half, half) //3사분면
            quard(row+half, col, half) //1사분면
            quard(row+half, col+half, half) //4사분면
        } else {
            if(arr[row][col] === 0) {
                answer[0]++;
            } else {
                answer[1]++;
            }
        }
    }
    
    quard(0, 0, arr.length);
    return answer;
}