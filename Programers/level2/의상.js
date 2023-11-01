function solution(clothes) {
    let clothesObj = {};
    let kinds = 0;
    for(let i=0; i<clothes.length; i++) {
        let clotheKind = clothes[i][1];
        if(clothesObj[clotheKind]) {
            clothesObj[clotheKind]++;
        } else {
            clothesObj[clothes[i][1]] = 1;
            kinds++;
        }
    }
    console.log(clothesObj, kinds)
    //kinds C  
    let answer = 1;
    for(let kind in clothesObj) {
        answer = answer * (clothesObj[kind] + 1)
    }
    console.log(answer)
    return answer-1;
}

solution(	[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])