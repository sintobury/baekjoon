function solution(signals) {
    const n = signals.length;
    let answer = 0; 
    let gcd = (a,b) => {
        return a%b === 0 ? b: gcd(b,a%b);
    }
    let lcd = (a,b) =>{
        return (a*b)/gcd(a,b);
    }
    let sum = (signal) => {
        let result = 0;
        for(let i=0; i<3; i++){
            result += signal[i];
        }
        return result;
    }
    let totalLCD = lcd(sum(signals[0]), sum(signals[1]))

    for(let i=0; i<n-2; i++){
        totalLCD = lcd(totalLCD, sum(signals[i+2]));
    }

    const list = new Array(totalLCD).fill(0);
    for(let i=0; i<n; i++){
        let [G,Y,R] = [signals[i][0], signals[i][1], signals[i][2]];
        let total = sum(signals[i]);
        let newTotal = total;
        let [YS, YE] = [G, G+Y];
        for(let j=0; j<totalLCD; j++){
            if(YS <= j%total && j%total<YE){
                list[j] += 1; 
            }
            /*if( j === newTotal+1) {
                YS += total;
                YE += total;
                newTotal += total;
            }*/
        }
    }
    answer = list.findIndex((el) => el === n);
    return answer !== -1 ? answer+1 : -1;
}

console.log(solution([[1, 1, 4], [2, 1, 3], [3, 1, 2], [4, 1, 1]]))