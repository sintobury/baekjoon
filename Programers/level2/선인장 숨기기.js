function solution(m, n, h, w, drops) {
    //deque 사용해서 풀어보기
    let nonDrop = drops.length;
    let field = Array.from(Array(m), () => new Array(n).fill(nonDrop));
    for(let i=0; i<nonDrop; i++){
        let drop = drops[i]
        let [y,x] = drop;
        field[y][x] = i;
    }

    let rowMin = Array.from(Array(m), () => new Array(n - w + 1).fill(0));
    for(let i=0; i < m; i++){
        let deque = []; //인덱스 저장     
        let head = 0;   
        
        for(let j=0; j < n; j++){
            //윈도우 범위를 벗어나면 헤드를 한칸 뒤로 옮겨가며 앞의요소를 제거 
            if(head < deque.length && deque[head] <= j - w){
                head++;
            }
            // 덱의 뒤에서부터, 최소값이 되는경우를 제외하고 모두 제거
            while(deque.length > head && field[i][deque[deque.length - 1]] >= field[i][j]){
                deque.pop();
            }
            deque.push(j);
            
            // 윈도우 크기가 꽉 찬 시점부터 rowMins에 구간 최솟값 기록
            if(j >= w - 1){
                rowMin[i][j - w + 1] = field[i][deque[head]];
            }
        }
    }

    let arrMin = Array.from(Array(m - h + 1), () => new Array(n - w + 1).fill(0));
    for(let j=0; j < n - w + 1; j++){
        let deque = [];
        let head = 0;
        
        for(let i=0; i < m; i++){
            if(head < deque.length && deque[head] <= i - h){
                head++;
            }

            while(deque.length > head && rowMin[deque[deque.length - 1]][j] >= rowMin[i][j]){
                deque.pop();
            }
            deque.push(i);
            
            if (i >= h - 1) {
                arrMin[i - h + 1][j] = rowMin[deque[head]][j];
            }
        }
    }
    
    let answer = [0, 0];
    let maxDrop = -1;
    for(let i=0; i <= m - h; i++){
        for(let j=0; j <= n - w; j++){
            let drop = arrMin[i][j];
            
            if(drop === nonDrop){
                return [i, j]; 
            }
            
            if(drop > maxDrop){
                maxDrop = drop;
                answer = [i, j];
            }
        }
    }
    
    
    return answer;
}

console.log(solution(	4, 5, 2, 2, 	[[0, 0], [3, 1], [1, 3], [2, 4], [1, 1], [2, 2], [2, 3], [0, 4]]))