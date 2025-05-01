function solution(dirs) {
    let now = [0,0];
    const commands = {U:[0,1], D:[0,-1], R:[1,0], L:[-1,0]};
    const field = new Array(11).fill(0)
        .map(() => new Array(11).fill(0)
        .map(() => new Array(4).fill(false))); 
    let distance = 0;
    for(let i=0; i<dirs.length; i++) {
        const command = dirs[i];
        const [x, y] = commands[command];
        const nextX = x + now[0];
        const nextY = y + now[1];
        if(-5 <= nextX &&  nextX <= 5 && -5 <= nextY && nextY <= 5) {
            now = [nextX,nextY];
            const [fieldX, fieldY] = [nextX + 5, nextY + 5];
            if(command === "U") {
                if(field[fieldY][fieldX][0] === true) continue;
                field[fieldY][fieldX][0] = true;
                field[fieldY-1][fieldX][1] = true;
                distance++;
            }
            if(command === "D") {
                if(field[fieldY][fieldX][1] === true) continue;
                field[fieldY][fieldX][1] = true;
                field[fieldY+1][fieldX][0] = true;
                distance++;
            }
            if(command === "R") {
                if(field[fieldY][fieldX][2] === true) continue;
                field[fieldY][fieldX][2] = true;
                field[fieldY][fieldX-1][3] = true;
                distance++;
            }
            if(command === "L") {
                if(field[fieldY][fieldX][3] === true) continue;
                field[fieldY][fieldX][3] = true;
                field[fieldY][fieldX+1][2] = true;
                distance++;
            }
        }
    }
    
    return distance;
}

console.log(solution("URULDD"))