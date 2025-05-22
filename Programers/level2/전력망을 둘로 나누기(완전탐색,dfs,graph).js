function solution(n, wires) {
  let answer = 101; // n 최대가 100이므로
  
  const graph = Array.from({ length: n + 1 }, () => []);
  
  // 간선 정보로 그래프 구성
  wires.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  // 서브트리의 크기를 구하는 함수 (DFS 사용)
  function dfs(idx, visited) {
    visited[idx] = true; // 현재 노드 방문 처리
    let count = 1; // 현재 노드를 포함한 개수
    for (let next of graph[idx]) {
        //간선에 연결된 곳 = next
      if (!visited[next]) {
        //방문한 적 없으면 재귀
        count += dfs(next, visited); // 재귀적으로 연결된 와이어 개수 더하기
      }
    }
    return count;
  }

  // 와이어 하나씩 끊어서 두 덩어리로 나누기
  for (let [v1, v2] of wires) {
    const visited = Array(n + 1).fill(false); // 방문 여부 체크 배열

    visited[v2] = true; // 간선을 끊는 효과를 내기 위해 한쪽을 방문한 것으로 처리
    const subtreeSize = dfs(v1, visited); // 한쪽 서브트리 크기 구하기

    // 두 덩어리 크기 차이를 계산
    const diff = Math.abs(subtreeSize - (n - subtreeSize));
    answer = Math.min(answer, diff); // 최소 차이 업데이트
  }

  return answer; // 최소 차이 반환
}

console.log(solution(14,	 [[1, 6], [1, 3], [1, 4], [2, 4], [4, 9], [5, 6], [6, 8], [6, 7], [6, 13], [6, 14], [9, 10], [10, 11], [11, 12]]))