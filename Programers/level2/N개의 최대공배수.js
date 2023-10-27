function solution(arr) {
    const gcd = (a,b) => {
        let r = a%b;
        if(r === 0) {
            return b;
        }
        return gcd(b,r);
    }
    let GCD = gcd(arr[1],arr[0]);
    let LCD = arr[1]*arr[0]/GCD;
    for(let i=2; i<arr.length; i++) {
        GCD = gcd(arr[i],LCD);
        LCD = arr[i]*LCD/GCD;
    }
    return LCD;
}