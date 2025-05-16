function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    //총 시간
    let bridge = new Array(bridge_length).fill(0);
    //다리 길이만큼의 배열을 0채워 생성
    let onBridge = 0;
    //다리위에 있는 트럭 무게 총합
    let nextTruck = 0;
    //다음 트럭의 idx
    
    answer++;
    bridge.shift();
    //다리에 트럭넣을 자리 만들어주고
    onBridge += truck_weights[nextTruck];
    bridge.push(truck_weights[nextTruck]);
    //다리 위 트럭 무게를 더해주고 다리 큐에 트럭 넣기
    nextTruck++;
    //트럭 넣었으니 다음 트럭idx로
  
  while (onBridge > 0){//트럭들이 다리위에 있는 동안 반복
      answer++;
      
      onBridge -= bridge.shift();
      //트럭 들어올 자리 만들어주기
      if (truck_weights.length > nextTruck && onBridge + truck_weights[nextTruck] <= weight) {
        //다음 들어올 트럭이 존재하고 다리에 넣을 수 있을 때 
          onBridge += truck_weights[nextTruck];
          bridge.push(truck_weights[nextTruck]);
          nextTruck++;
        } else {
        //트럭이 못들어오면 0으로 다리 큐 길이 유지
          bridge.push(0);
      }
  }
  
  return answer;
}