function solution(board, moves) {
    let answer = 0;
    let basket = [];
    for(const move of moves){
        for(let i=0; i<board.length; i++){
            const doll = board[i][move-1];
            if(doll !== 0){

                if(basket[basket.length-1] === doll){
                    basket = basket.slice(0,basket.length-1);
                    answer += 2;
                } else {
                    basket.push(doll);   
                }

                board[i][move-1] = 0;
                break;
            }  
        } 
    }
    
    return answer;
    
}