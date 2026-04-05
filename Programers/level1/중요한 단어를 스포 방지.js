function solution(message, spoiler_ranges) {
    //message => 띄어쓰기된 문장 -> 공백으로 단어 구분, range => 2차원 배열로 제공, 스포방지 구간을 인덱스로 제공
    //스포방지가 풀렸을 때 중요한 단어면 answer++, 중요한 단어 = 스포방지면서 풀렸을때 한번도 나오지 않은 단어
    //range 기준으로 먼저 스포방지 단어 산출 -> 인덱스에 포함되면 포함되는 단어(일부포함이어도) 전부 
    //등장한 단어는 따로 저장(중요 단어인지 확인용) -> set으로? -> 등장횟수 저장, 1이 아니면 중요단어X, 이후 저장(뒤에 또 나올수도있으니)
    let wordList = message.split(' ');
    //제공하는 변수명기준으로 설명하듯이 쓰는게 낫다
    // 변수명 연관성있게  
    let spoiler_range = spoiler_ranges[0];
    let rangeIndex = 0;
    let [wordStart,wordEnd] = [0, wordList[0].length-1];
    const revealedWordSet = new Set(); 
    const spoilerSet = new Set();
    const outSet = new Set();
    for(const word of wordList){
        wordEnd = wordStart + word.length-1;
        console.log([wordStart, wordEnd], spoiler_range, word)
        if(spoiler_range[1] < wordStart){
            revealedWordSet.add(word);
        }

        if(wordEnd < spoiler_range[0]){
            //방지 범위 앞 -> 패스
            revealedWordSet.add(word);
        } else if(spoiler_range[0] <= wordEnd && wordStart <= spoiler_range[1]){
            //방지 범위 안
            spoilerSet.add(word);
        } 
        if(wordEnd + 1 >= spoiler_range[1]){
            if(rangeIndex < spoiler_ranges.length){
                for(let i=rangeIndex+1; i<spoiler_ranges.length; i++){
                    //단어끝에는 공백이 오기때문에 +1로 고려
                    if(spoiler_ranges[i][1] > wordEnd+1){
                        spoiler_range = spoiler_ranges[i];
                        rangeIndex = i ;
                        break;
                    }
                }
            }
        }
        wordStart = wordEnd + 2;
        console.log(revealedWordSet, spoilerSet)
    }

    for(const word of revealedWordSet){
        if(spoilerSet.has(word)){
            outSet.add(word);
        }
    }

    return spoilerSet.size - outSet.size;
}

console.log(solution("word next", [[0, 0], [1, 1], [5, 5]]))

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

