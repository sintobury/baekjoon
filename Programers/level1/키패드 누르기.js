function solution(numbers, hand) {
    let numberMap = new Map();
    for(let i=1; i<10; i++){
        let x = (i-1)%3;
        let y = Math.floor((i-1)/3);
        numberMap.set(i,{x,y})
    }

    numberMap.set('*',{x:0, y:3});
    numberMap.set(0,{x:1, y:3});
    numberMap.set('#',{x:2, y:3});
    
    let [RNow, LNow] = ['*','#']; 
    let answer = ''
    for(const number of numbers){
        //console.log(LNow, RNow, number, answer)
        if(numberMap.get(number).x === 0){
            LNow = number;
            answer += 'L';
        } else if(numberMap.get(number).x === 2){
            RNow = number;
            answer += 'R';
        } else {
            let [LY,LX] = [numberMap.get(LNow).y, numberMap.get(LNow).x]; 
            let [RY,RX] = [numberMap.get(RNow).y, numberMap.get(RNow).x];
            let [numY,numX] = [numberMap.get(number).y, numberMap.get(number).x]
            let LDis = Math.abs(LY-numY) + Math.abs(LX-numX);
            let RDis = Math.abs(RY-numY) + Math.abs(RX-numX);
            if(LDis > RDis){
                RNow = number;
                answer += 'R';
            } else if(LDis < RDis){
                LNow = number;
                answer += 'L';
            } else {
                if(hand === 'right'){
                    RNow = number;
                    answer += 'R';
                } else {
                    LNow = number;
                    answer += 'L';
                }
            }
        }
    }
    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	, "right"))