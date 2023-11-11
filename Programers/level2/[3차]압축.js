function solution(msg) {
    const dictionary = {};
    let dictionaryLength = 0;
    for(let i=65; i<91; i++) {
        dictionary[String.fromCharCode(i)] = i-64;
        dictionaryLength++
    }
    let answer = [];
    for(let i=0; i<msg.length; i++) {
        // if(i === msg.length-1) {
        //     answer.push(dictionary[msg[msg.length-1]]);
        //     break;
        // }
        for(let j=i+1; j<=msg.length; j++) {
            let subString = msg.substring(i,j);
            console.log(i,j)
            console.log(subString)
            // console.log(dictionary[subString])
            if(!dictionary[subString]){
                
                // console.log(subString)
                answer.push(dictionary[subString.substring(0,subString.length-1)]);
                dictionaryLength++;
                dictionary[subString] = dictionaryLength;
                i = j-2;
                break;
            }
            if(j===msg.length) {
                answer.push(dictionary[subString]);
                i=msg.length;
                break;
            }
        }
    }
    console.log(answer)
    return answer;
}
solution("ABABABABABABABAB")