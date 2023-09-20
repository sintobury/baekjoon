function paveBox(boxes) {
  // TODO: 여기에 코드를 작성합니다.
  // 큐에 배열요소를 하나씩 넣음
  // head보다 tail이 큰경우 tail앞까지 전부 shift, size재서 기록
  // 마지막까지 진행후 중간중간 size를 재서 최대 size를 저장
  // 최대 size를 리턴
  let queue = [];
  let maxSize = 0;
  let size = 0;
  for(let i=0; i<boxes.length; i++){
    let box = boxes[i];
    if(queue.length === 0){
      queue.push(box);
    } else if(queue[0] < box){
      size = queue.length;
      if(maxSize < size){
        maxSize = size;
      }
      queue = [];
      queue.push(box);
    } else {
      queue.push(box);
    }
  }
  size = queue.length;
  if(maxSize < size){
    maxSize = size;
  }
  return maxSize;
}

console.log(paveBox([1, 1, 80, 1, 1]))
console.log(new Date().toLocaleString())