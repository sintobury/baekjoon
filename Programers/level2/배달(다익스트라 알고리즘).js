// 다익스트라 알고리즘 
// 그래프,간선에서 최소경로 구하는 알고리즘 
function solution(N, road, K) {
    const graph = new Array(N+1).fill(0).map(()=>[]);
    const distance = new Array(N+1).fill(Infinity);

    //그래프에 마을별 거리 초기화
    road.forEach(([vilA, vilB, t]) => {
        graph[vilA].push({to: vilB, time: t});
        graph[vilB].push({to: vilA, time: t});
    });

    let queue = [];
    queue.push({to:1, time:0});
    distance[1] = 0;

    while(queue.length > 0){
        const {to, time} = queue.pop(); 
        
        graph[to].forEach((next) => {
            if(distance[next.to] > distance[to] + next.time){
                distance[next.to] = distance[to] + next.time;
                queue.push(next);
            }
        })
    }

    return distance.filter((distance) => distance <= K).length;
}

console.log(solution(5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3))