function solution(friends, gifts) {
    //friends = 친구들 이름 배열, gifts = 선물 주고받은 기록을 담은 배열 -> 준 사람, 받은 사람 이름이 공백 간격으로 문자열제공
    //다음달 가장 많은 선물을 받는 친구의 받는 선물 수를 리턴
    //서로간에 선물을 덜받은 사람이 다음달 하나받음, 서로 차이가 없으면 남에게 선물 준 수가 더 많은 사람이 받음
    
    //선물 주고받기 결과 표 초기화
    const friendGraph = {};
    for(const person of friends){
        const giftGraph = {};
        const friendList = friends.slice().filter((friend) => friend !== person)
        for(const friend of friendList){
            giftGraph[friend] = 0;
        }
        giftGraph["giftDegree"] = 0;
        friendGraph[person] = giftGraph;
    }

    //선물 주고받기 과정 진행
    for(const gift of gifts){
        let split = gift.split(' ');
        const [sender, receiver] = split;
        friendGraph[sender][receiver] += 1;
        friendGraph[receiver][sender] -= 1;
        friendGraph[sender]["giftDegree"] += 1;
        friendGraph[receiver]["giftDegree"] -= 1;
    }
    
    /*
    console.log(friendGraph["a"]);
    console.log(friendGraph["b"]);
    console.log(friendGraph["c"]);
    */

    //다음달 누가 가장 많이 받을지 계산
    let nextMonthGiftList = [];
    //여기는 i써서 순회하는게 훨씬 비효율감소
    for(const person of friends){
        let graph = friendGraph[person];
        console.log(graph)
        let nextMonthGift = 0;
        for(const friend in graph){
            if(friend !== "giftDegree"){
                if(graph[friend] > 0){
                    nextMonthGift++;
                } else if(graph[friend] === 0){
                    if(friendGraph[person]["giftDegree"] > friendGraph[friend]["giftDegree"]){
                        nextMonthGift++;
                    }
                }
            }
            
        }
        nextMonthGiftList.push(nextMonthGift);
    }
    //console.log(nextMonthGiftList)

    //가장 많이 선물 받은 수 리턴
    return Math.max(...nextMonthGiftList);
}

console.log(solution(["a", "b", "c"],["a b", "b a", "c a", "a c", "a c", "c a"]))