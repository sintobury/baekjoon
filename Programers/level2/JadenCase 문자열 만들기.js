function solution(s) {
    const arrayS = s.split(" ");
    const answer = arrayS.map((el)=>el.charAt(0).toUpperCase()+el.slice(1).toLowerCase());
    return answer.join(" ");
}