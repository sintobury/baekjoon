function solution(players, callings) {
    const answer = players.slice();
    const memo = {};
    for(let i=0; i<callings.length; i++) {
        const player = callings[i];
        let playerIdx;
        if(memo[player]){
            playerIdx = memo[player];
        } else {
            playerIdx = answer.findIndex((el)=>el === player);
        }
        const front = playerIdx - 1;
        const frontPlayer = answer[front];
        answer[front] = player;
        answer[playerIdx] = frontPlayer;
        memo[player] = front;
        memo[frontPlayer] = playerIdx;
    }
    return answer;
}