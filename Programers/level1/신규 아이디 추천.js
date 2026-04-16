function solution(new_id) {
    let answer = new_id.toLowerCase();
    
    const reg = /[^a-z0-9-_.]/g;
    answer = answer.replace(reg,'');

    //중복처리 정규표현식 사용
    const compression = (str) => {
        let result = '';
        for(let i=0; i<str.length; i++){
            if(i!==0 && str[i-1] === '.' && str[i] === '.'){
                continue;
            } else {
                result += str[i];
            }
        }
        return result;
    }
    answer = compression(answer);

    //시작점, 끝점도 정규표현식으로 처리
    if(answer[0] === '.'){
        answer = answer.slice(1);
    } 

    if(answer === ""){
        answer = 'a';
    }
    
    if(answer.length > 15){
        answer = answer.slice(0,15);
    }

    if(answer[answer.length-1] === '.'){
        answer = answer.slice(0,answer.length-1);
    }


    if(answer.length <= 2){
        for(let i=answer.length; i<3; i++){
            answer += answer[answer.length-1]
        }
    }
    //padEnd 활용

    return answer
}

console.log(solution("abcdefghijklmn.p"))