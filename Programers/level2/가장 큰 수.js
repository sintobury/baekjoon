function solution(numbers) {
    const numStr = numbers.slice()
                .map((el) => el.toString())
                //문자로 변경
                .sort((a,b) => {
                    //앞 뒤로 붙여보고 큰 경우를 앞으로 정렬
                    if(Number(b+a) > Number(a+b)) {
                        return 1
                    } else {
                        return -1
                    }
                })
    console.log(numStr)
    const answer = numStr.join('');
    return answer[0] !== "0" ? answer : "0";
}

console.log(solution([0,0, 0, 0]))