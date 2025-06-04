function solution(n, k, enemy) {
    let maxList = [];
    let answer = 0;
    let immune = k;
    let max = Math.max(...enemy);

    while(k > 0){
        let count = 0;
        for(let i=0; i<enemy.length; i++){
            if(enemy[i] === max){
                maxList.push(i);
                count++;
            }
        }
        max--;
        k -= count;
    }
    
    for(let i=0; i<enemy.length; i++){
        if(!maxList.includes(i)){
            n -= enemy[i];
        } else {
            immune--;
        }
        answer++;
        
        if(n - enemy[i+1] < 0 && immune === 0){
            break;
        }
    }
    
    return answer;
       
}

console.log(solution( 3, 1, [ 3, 4 ] ))