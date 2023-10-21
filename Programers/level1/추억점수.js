function solution(name, yearning, photo) {
    const score = {};
    for(let i=0; i<name.length; i++) {
        score[name[i]] = yearning[i]
    }
    let answer = [];
    for(let i=0; i<photo.length; i++) {
        let list = photo[i];
        let sum = 0;
        for(let j=0; j<list.length; j++) {
            if(score[list[j]]){
                sum += score[list[j]]
            }
        }
        answer.push(sum);
    }
    return answer;
    //2중 반복문 reduce로 가능
}
const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];
solution(name, yearning, photo)