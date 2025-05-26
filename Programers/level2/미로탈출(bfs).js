function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    let s = [];
    let l = [];
    let e = [];
    for(let i=0; i<n; i++) {
        let row = maps[i].split('');
        row = row.map((el,idx) => {
            if(el === "O"){
                return 1;
            } else if(el === "X") {
                return 0;
            } else if(el === "S") {
                s = [i,idx];
                return 1;
            } else if(el === "L") {
                l = [i,idx];
                return 1;
            } else {
                e = [i,idx];
                return 1;
            }
        });
        maps[i] = row;
    }
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let answer = 0;
    const bfs = (start,exit) => {
        const visited = new Array(n).fill(0).map(() => new Array(m).fill(0));
        const queue = [[...start, 0]];
        visited[start[0]][start[1]] = 1;
        
        while(queue.length > 0){
            const [col, row, second] = queue.shift();
            if(col === exit[0] && row === exit[1]){
                return second;
            }
            
            for (let [ydir, xdir] of dir) {
                const nextY = col + ydir;
                const nextX = row + xdir;   

                if(nextY >= 0 && nextY < n && nextX>= 0 && nextX < m ){
                    if(visited[nextY][nextX] === 1) continue;
                    if(maps[nextY][nextX] === 1){
                        queue.push([nextY, nextX, second+1]);
                        visited[nextY][nextX] = 1; 
                    }
                }
            }

        }
        return -1;
    }
    const StoL = bfs(s,l);
    const LtoE = bfs(l,e);
    if(StoL === -1 || LtoE === -1){
        return -1;
    }
    return answer + StoL + LtoE;
}

console.log(solution(	["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]))