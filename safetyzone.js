var board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]
var n = board.length
var xr = [-1,1,0,0,-1,-1,1,1]
var yr = [0,0,-1,1,-1,1,-1,1]
let booms = []
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(board[i][j]===1){
            booms.push([i,j])
        }
    }
}
booms.forEach(([x,y]) => {
    for(let i = 0; i<8; i++){
        let nx = xr[i]+ x
        let ny = yr[i]+ y
        if(nx>=0&&nx<n&&ny>=0&&ny<n){
            board[nx][ny]= 1
        }
    }
});
let count=0
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(board[i][j]===0){
            count++
        }
    }
}
return count