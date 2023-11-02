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
    let answer = 1;
    // 옷 종류별로 안입는 경우까지 더해 합산
    for(let kind in clothesObj) {
        answer = answer * (clothesObj[kind] + 1)
    }
    // 옷을 아예 안입는 경우는 총합에서 제외
    return answer-1;
}

solution(	[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])