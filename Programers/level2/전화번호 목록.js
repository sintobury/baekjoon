function solution(phone_book) {
    const sort = phone_book.slice().sort();
    for(let i=0; i<sort.length-1; i++) {
        if(sort[i+1].substring(0, sort[i].length) === sort[i]){
            return false;
        }
    }
    return true;
}
console.log(solution(["119", "97674223", "1195524421"]))