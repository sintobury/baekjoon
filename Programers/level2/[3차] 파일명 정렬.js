function solution(files) {
    return files.sort((a,b) => {
        const headA = a.match(/\D+/)[0].toLowerCase()
        const headB = b.match(/\D+/)[0].toLowerCase()
        //match = str.match(정규식) => 정규식에 일치하는 str을 첫요소로 갖는 배열 리턴
        // \D => 숫자가 아닌것과 매칭 [^0-9]와 동일
        if(headA < headB) return -1; 
        if(headA > headB) return 1;
        
        const numA = a.match(/\d+/)[0].replace(/^0+/,'')
        const numB = b.match(/\d+/)[0].replace(/^0+/,'')
        // replace문으로 num부분의 앞에 있는 0들을 제거
        // \d => 숫자 인것과 매칭 [0-9]와 동일
        return numA-numB; 
    })
}