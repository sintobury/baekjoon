function solution(players, m, k) {
    //서버 증설 횟수
    let answer = 0;
    //서버 증설된 양을 저장할 배열
    let mList = new Array(players.length).fill(0);
    for(let i=0; i<players.length; i++) {
        // 서버 증설해야 할 양
        let n = Math.floor(players[i]/m) - mList[i];
        if(n > 0) {
            for(let j=i; j<i+k; j++){
                // 24시까지만 보면되므로 더 길어지면 break
                if(j === players.length){
                    break;
                }
                //증설해야 할 서버 수 n을 k 시간만큼 배열에 업데이트
                mList[j] += n
            }
            answer += n;
            //서버 증설 했으니 횟수 증가
            console.log(n, mList,answer)
        }
    }
    return answer;
}

console.log(solution([0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5], 3, 5))