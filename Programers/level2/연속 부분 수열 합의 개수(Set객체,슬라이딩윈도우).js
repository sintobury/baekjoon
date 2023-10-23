function solution(elements) {
    const sumSet = new Set();
    //set 객체에 값을 담음(담긴것은 더 안담김)
    //합치는 윈도우 범위만큼 윈도우 앞은 빼고 뒤는 범위에 넣으면서 진행
    for(let i=1; i<=elements.length; i++) {
        let sum = 0;
        for(let j=0; j<elements.length; j++) {
            if(j===0) {
                for(let k=0; k<i; k++){
                    sum += elements[k];
                }
            } else {
                sum -= elements[j-1];
                sum += elements[(j+i-1) % elements.length];
            }
            sumSet.add(sum);
        }
    }
    
    return sumSet.size;
}