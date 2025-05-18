function solution(number, k) {
  const stack = [];

  for (const num of number) {
    //number 순회
    while (k > 0 && stack[stack.length - 1] < num) {
        //제거가능할 때 스택의 제일 뒤 숫자 = 제일 최근 스택에 들어간 숫자와 현재 순회숫자를 비교
        //현재 숫자가 더 크고 제거 가능할 때는 스택에서 제거하고 제거가능 숫자를 줄이기
      stack.pop();
      k--;
    }
    //순회하면서 스택에 숫자 넣기
    stack.push(num);
  }
  //스택에 숫자넣고서 아직 제거가능 횟수가 남은 경우 뒷부분을 잘라주기 
  stack.splice(stack.length - k, k);

  return stack.join("");
}

console.log(solution("1924", 2))