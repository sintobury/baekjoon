function solution(k, dungeons) {
    let answer = 0;
    let dungeonsNum = dungeons.length;
    let visited = new Array(dungeonsNum).fill(false);
    const dfs = (hp, process) => {
        for(let i=0; i<dungeonsNum; i++) {
            if(!visited[i]&&dungeons[i][0]<=hp) {
                visited[i] = true;
                dfs(hp-dungeons[i][1],process+1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer,process);
    }
    dfs(k,0);
    return answer;
}

console.log(solution(	80, [[80, 20], [50, 40], [30, 10]]))