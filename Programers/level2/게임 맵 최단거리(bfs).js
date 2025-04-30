function solution(maps) {
    const n = maps.length; 
    const m = maps[0].length; 
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]; 
    const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));

    const bfs = () => {
        const queue = [[0, 0, 1]]; 
        visited[0][0] = true;

        while (queue.length > 0) {  
            const [y, x, distance] = queue.shift();
            if (y === n-1 && x === m-1) {
                return distance;
            }

            for (let [ydir, xdir] of dir) {
                const nextY = y + ydir;
                const nextX = x + xdir;   

                if(nextY >= 0 && nextY < n && nextX>= 0 && nextX < m ){
                    if(visited[nextY][nextX] === true) continue;
                    if(maps[nextY][nextX] === 1){
                        queue.push([nextY, nextX, distance+1]);
                        visited[nextY][nextX] = true; 
                    }
                }
            }
        }
        return -1;
    };

    return bfs();
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))