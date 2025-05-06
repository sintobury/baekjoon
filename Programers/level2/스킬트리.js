function solution(skill, skill_trees) {
    let answer = skill_trees.length;
    for(let i=0; i<skill_trees.length; i++) {
        let skilltree = skill_trees[i].split("");
        let j = 0;
        console.log(skilltree)
        while(skilltree.length > 0){
            let first = skilltree.shift();
            let order = skill.indexOf(first);
            console.log(first, order)
            if(order !== -1) {
                if(order === j) {
                    j++;
                } else {
                    answer--;
                    break;
                }
            }
        }
    }
    return answer;
}

console.log(solution("CBD",["BACDE", "CBADF", "AECB", "BDA"]))