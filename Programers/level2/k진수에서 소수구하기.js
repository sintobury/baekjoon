function solution(n, k) {
    const numlist = n.toString(k).split("0").filter((el)=>el!=="");
    let Prime = [];
    function isPrime(num) {
        if(num === 1) {
            return false;
        }
        if(num === 2) {
            Prime.push(num);
            return true;
        }
        if(Prime.includes(num)){
            return true;
        }

        for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
            if(num % i === 0){
                return false; 
            }
        }
        Prime.push(num);
        return true; 
    }
    let answer = 0;
    for(let i=0; i<numlist.length; i++) {
        if(isPrime(Number(numlist[i]))) {
            answer++;
        }
    }
    return answer;
}

solution(	110011, 10)