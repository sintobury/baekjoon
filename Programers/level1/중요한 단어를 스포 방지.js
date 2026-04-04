function solution(message, spoiler_ranges) {
    //message => 띄어쓰기된 문장 -> 공백으로 단어 구분, range => 2차원 배열로 제공, 스포방지 구간을 인덱스로 제공
    //스포방지가 풀렸을 때 중요한 단어면 answer++, 중요한 단어 = 스포방지면서 풀렸을때 한번도 나오지 않은 단어
    //range 기준으로 먼저 스포방지 단어 산출 -> 인덱스에 포함되면 포함되는 단어(일부포함이어도) 전부 
    //등장한 단어는 따로 저장(중요 단어인지 확인용) -> set으로? -> 등장횟수 저장, 1이 아니면 중요단어X, 이후 저장(뒤에 또 나올수도있으니)
    let wordList = message.split(' ');
    let scope = spoiler_ranges[0];
    let scopeNumber = 0;
    let [nextStart,nextEnd] = [0, wordList[0].length-1];
    const revealedWordSet = new Set(); 
    const spoilerSet = new Set();
    const outSet = new Set();
    let i = 0;
    let answer = 0;
    while(i<wordList.length){
        let word = wordList[i];
        //console.log(word, scope, [nextStart,nextEnd], spoilerSet, revealedWordSet)
        if(scope[0] > nextEnd){
            //방지 범위 앞 -> 패스
            revealedWordSet.add(word);
            nextStart = nextEnd + 2;
            i++;
            if(i === wordList.length){
                break;
            }
            nextEnd = nextStart + wordList[i].length-1;
        } else if(scope[0] <= nextEnd && scope[1] >= nextStart){
            //방지 범위 안 -> 처음등장하면 +1
            if(!spoilerSet.has(word)){
                spoilerSet.add(word);
                answer++;
            }
            nextStart = nextEnd + 2;
            i++;
            if(i === wordList.length){
                break;
            }
            nextEnd = nextStart + wordList[i].length-1;
        } else if(scope[1] < nextStart){
            scopeNumber++;
            if(spoiler_ranges.length-1 >= scopeNumber){
                scope = spoiler_ranges[scopeNumber];
            } else {
                for(let j=i; j<wordList.length; j++){
                    revealedWordSet.add(wordList[j]);
                }
                break;
            }
        }
    }
    for(const word of revealedWordSet){
        if(spoilerSet.has(word)){
            outSet.add(word);
        }
    }
console.log(spoilerSet, revealedWordSet, outSet)

    return answer-outSet.size;


    /*
    const spoilerWord = new Set();
    const revealedWordList = new Set();
    let answer = 0;
    for(let i=0; i<wordList.length; i++){
        nextEnd = nextStart + wordList[i].length-1;
        let word = wordList[i];
        //console.log(wordRange, scope, word)
        if(scope[0] > nextEnd){
            //방지 범위 앞 -> 제외되는 단어 -> set에 미리 저장
            revealedWordList.add(word);
            needRecheck = false;

        } else if(scope[0] <= nextEnd && scope[1] >= nextStart){
            //방지 범위 안 -> 확인해야하는 단어
            spoilerWord.add(word);
            needRecheck = false;
            
        } else if(scope[1] < nextStart){
            //방지 범위 뒤 -> 범위를 다음범위로 변경, 다시체크
            scopeNumber++;
            if(spoiler_ranges.length-1 >= scopeNumber){
                scope = spoiler_ranges[scopeNumber];
            } else {
                //마지막 방지 범위 뒤 -> 남은 단어 전부 set에 저장후 탈출
                for(let j=i; j<wordList.length; j++){
                    revealedWordList.add(word);
                }
                break;
            }
            i--;
            needRecheck = true;
        }
        if(!needRecheck){
            nextStart = nextEnd + 2;
        } 
        
        //console.log(spoilerWord, revealedWordList, answer)
    }
    //console.log(spoilerWord, revealedWordList)
    //스포방지가 set에 있는 단어인지 확인
    for(const word of spoilerWord){
        if(!revealedWordList.has(word)){
            answer++;
            revealedWordList.add(word);
        } 
    }
    /*
    for(let i=0; i<spoilerWord.length; i++){
        let word = spoilerWord[i];
        if(!revealedWordList.has(word)){
            answer++;
            revealedWordList.add(word);
        } 
    }*/
    return answer;
}

console.log(solution("my phone number is 01012345678 and may i have your phone number", [[5, 5], [25, 28], [34, 40], [53, 59]]))