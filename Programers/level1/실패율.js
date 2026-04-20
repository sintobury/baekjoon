function solution(N, stages) {
    let players = stages.length;
    let stageMap = new Map();
    for(const stage of stages){
        let tryPlayers = stageMap.get(stage);
        if(tryPlayers){
            stageMap.set(stage, tryPlayers+1);
        } else {
            stageMap.set(stage, 1);
        }   
    }
    
    let failMap = new Map();
    for(let i=1; i<=N; i++){
        let failPlayers = stageMap.get(i) ?? 0;
        let rate = failPlayers/players; 
        failMap.set(i,rate);
        players -= failPlayers;
    }
    
    let answer = new Array(N).fill(0).map((el,idx) => idx+1);
    answer.sort((a,b) => failMap.get(b) - failMap.get(a));
    return answer;
}