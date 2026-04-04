function solution(n, w, num) {
    //n개 택배상자, w개씩 가로, num번째 상자꺼낼때 그보다 바로 위에있는 상자도 꺼내기, 총꺼내는 상자수
    let answer = 0;
    let maxY = Math.floor(n/w);
    //택배상자 쌓기
    let box = 1;
    let h = 0;
    let boxes = [];
    let location = [0,0];
    while( maxY >= h){
        let floor = new Array(w).fill(0);
        for(let i=0; i<w; i++){
            if(box > n){
                break;
            }
            floor[i] = box;
            if(box === num){
                if(h % 2){
                    location = [h, w-i-1];
                } else {
                    location = [h, i];
                }
            }
            box++;
        }
        if(h%2 === 1){
            floor = floor.reverse();
        }
        boxes.push(floor);
        h++;
    }
    //쌓은 상자에서 좌표로 위에거 찾기
    let yStart = location[0];
    let xStart = location[1];
    while(yStart <= maxY){
        if(boxes[yStart][xStart]){
            answer++
        }
        yStart++;
    }

    return answer;
    console.log(boxes[4], location, answer)
}

console.log(solution(13,3,6))

/*
function solution(n, w, num) {
    const currentHeight = Math.ceil(num/w);
    const currnetHeightIsEven = currentHeight % 2 === 0
    const basic = currnetHeightIsEven ? currentHeight * w -1 * num + 1 : w - (currentHeight * w - num)
    let topHeight = Math.ceil(n/w)
    const topHeightIsEven = topHeight % 2 === 0
    const lastValue = (topHeightIsEven ? w * topHeight - basic + 1 : w * topHeight - (w - basic)) <= n ? 1 : 0
    return  topHeight - currentHeight + lastValue
}
    */