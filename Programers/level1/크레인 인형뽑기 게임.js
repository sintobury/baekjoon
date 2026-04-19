function solution(board, moves) {
    let answer = 0;
    let basket = [];
    for(const move of moves){
        let doll = 0;
        for(let i=0; i<board.length; i++){
            if(board[i][move-1] !== 0){
                doll = board[i][move-1];
                board[i][move-1] = 0;
                break;
            }  
        }
        
        if(doll === 0){
            continue;
        }
        
        if(basket[basket.length-1] === doll){
            basket = basket.slice(0,basket.length-1);
            answer += 2;
        } else {
            basket.push(doll);   
        }
    }
    return answer;
    
}