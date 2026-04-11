function solution(bandage, health, attacks) {
    //bandage = 붕대감기 시전시간, 1초당 회복량, 끝까지 사용했을때 추가회복량 을 담은 배열
    //health = 최대체력
    //attacks = 몬스터의 공격시간과 피해량이 담긴 2차원배열
    // 모든 공격이 끝난후 남은 체력 리턴 -> 죽은 경우(남은체력이 0이하인경우) -1 리턴
    // 공격받은 시점에 붕대감기가 끊기고 다음초부터 회복다시 시작, 연속성공이 초기화됨
    let recentHealth = health;
    // health는 이미 변수니까 최대치를 상수로 만들고 이걸 변수로 쓰는게 더 직관적
    let healedTime = 0;
    let time = attacks[0][0]-1;
    let [castingTime, hps, additionalHeal] = bandage;
    for(const attack of attacks){
        let [now, damage] = attack;
        healedTime = now-time-1;
        let fullyCastedCount = Math.floor(healedTime/castingTime);
        recentHealth = Math.min(recentHealth + healedTime*hps + fullyCastedCount*additionalHeal, health)
        //console.log(now, recentHealth) 
        recentHealth -= damage;
        //console.log(now, recentHealth)
        if(recentHealth <= 0){
            return -1;
        }
        time = now;
    }
    return recentHealth;
}

console.log((solution([3, 2, 7], 20, 	[[1, 15], [5, 16], [8, 6]]	)))