function solution(numbers) {
    const result = new Set();
    //소수 판별
    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num === 2) return true;
        for( let i = 2; i <= Math.sqrt(num); i++) {
           if(num % i === 0) {
               return false;
           }
        }
        return true;
    }
    //순열 만들기 => 조합을 fixed에 넣어가며 소수 판별후 순열 생성
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newFixed = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                
                if(isPrime(parseInt(newFixed))) {
                    result.add(parseInt(newFixed));
                }
                
                getPermutation(copyArr, newFixed);
            }
        }
    }
    
    getPermutation(numbers,'');
    return result.size;
}