function solution(maps) {
    let answer = [];
    const n = maps.length; 
    const m = maps[0].length; 
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]; 
    const visited = new Array(n).fill(0).map(() => new Array(m).fill(false));

    const calculate = (y,x) => {
        let day = Number(maps[y][x]);
        let queue = [[y,x,day]];
        while(queue.length){
            let now = queue.shift();
            for(let direction of dir){
                let newX = direction[1] + now[1];
                let newY = direction[0] + now[0];
                if(newX >= 0 && newX < m && newY >= 0 && newY < n && !visited[newY][newX]){
                    if(maps[newY][newX] !== "X"){
                        queue.push([newY,newX, Number(maps[newY][newX])]);
                        day += Number(maps[newY][newX]);
                    }
                    visited[newY][newX] = true;
                }
                
            }
        }
        return day
    }

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++){
            if(!visited[i][j]){
                if(maps[i][j] === 'X') {
                    visited[i][j] = true;
                } else {
                    visited[i][j] = true;
                    answer.push(calculate(i,j));
                }
            }
        }
    }
    if(!answer.length) return [-1]
    answer = answer.sort((a,b)=> a-b);
    return answer
}

console.log(solution(["XXX","XXX","XXX"]))