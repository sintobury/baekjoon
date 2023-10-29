function solution(want, number, discount) {
    let answer = 0;
    discount.forEach((el,idx)=> {
        let slice = discount.slice(idx,idx+10);
        if(slice.length < 10) return answer;
        let isCollect = true;
        for(let i=0; i<want.length; i++) {
            if(slice.filter((el)=>el===want[i]).length !== number[i]){
                isCollect = false;
                break;
            } 
        }
        if(isCollect) {
            answer++;
        }
    })
     
    return answer;
}
console.log(solution(	["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]))