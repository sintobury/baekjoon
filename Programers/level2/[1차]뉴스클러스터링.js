function solution(str1, str2) {
    let A = str1.toLowerCase();
    let B = str2.toLowerCase();
    let alphabet = /^[a-z]+$/;
    let a = {};
    let lengthA = 0;
    for(let i=0; i<A.length-1; i++) {
        let sub = A.slice(i,i+2);
        if(alphabet.test(sub)){
            lengthA++;
            if(a[sub]) {
                a[sub]++;
            } else {
                a[sub] = 1;
            }
        }
    }
    let b = {};
    let lengthB = 0;
    for(let i=0; i<B.length-1; i++) {
        let sub = B.slice(i,i+2);
        if(alphabet.test(sub)){
            lengthB++;
            if(b[sub]) {
                b[sub]++;
            } else {
                b[sub] = 1;
            }
        }
    }
    if(lengthA === 0 && lengthB === 0) {
        return 65536;
    }
    console.log(a,b)
    let common = 0;
    for(let word in a) {
        if(a[word]&&b[word]){
            console.log(word)
            common += Math.min(b[word],a[word]);
        }
    }
    console.log({common,lengthA,lengthB})
    const answer = common/(lengthA+lengthB-common);
    return Math.floor(answer*65536)
}

console.log(solution(	"FRANCE","french"))