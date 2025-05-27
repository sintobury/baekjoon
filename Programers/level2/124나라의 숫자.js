function solution(n) {
    let answer = '';
    while(n>0){
        //몫
        let q = Math.floor(n/3);
        //나머지
        let r = n % 3;
        //나머지가 0일때 몫을 줄이고 3으로 답에 넣기
        if(r === 0){
            q--;
            r = 3;
        }
        answer = r + answer;
        //몫이 0이면 더 할 필요 X
        if(q === 0) break;

        n = q;
    }
    //3을 전부 4로 바꾸면 끝
    return answer.replace(/3/g,'4')
}

console.log(solution(6))