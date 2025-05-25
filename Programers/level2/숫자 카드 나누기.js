function solution(arrayA, arrayB) {
    const findCD = (A,B) => {
        //최대공약수
        let arrGCD = 0;
        //최대 공약수 구하는 함수(유클리드 호재법)
        const GCD =  (a, b) => a % b === 0 ? b : GCD(b, a % b);
        //A의 최대 공약수 구하기
        A.forEach((el) => {
            arrGCD = GCD(arrGCD, el);
        });
        //B에서 최대공약수가 약수인지 확인 약수중에 하나면 불가능으로 리턴
        if(B.some((el) => el%arrGCD === 0)) return 0;
        //검증 후 최대공약수 리턴
        return arrGCD;
    }
    //유클리드 호재법쓰기 위해 정렬해두고 사용
    arrayA.sort((a,b)=>a-b);
    arrayB.sort((a,b)=>a-b);
    const AGCD = findCD(arrayA,arrayB);
    const BGCD = findCD(arrayB,arrayA);
    //철수의 경우와 영희의 경우를 다 구하고 큰 수를 리턴
    return Math.max(AGCD,BGCD);
}

console.log(solution(	[10, 17], [5, 20]))