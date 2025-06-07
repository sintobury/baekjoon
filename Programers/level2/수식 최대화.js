function solution(expression) {  
    const calculate = (expression, operator) => {
        // 숫자 + 연산자 + 숫자 덩어리를 계산 후 반환
        const regex = new RegExp(`-?\\d+(\\${operator}-?\\d+)+`, 'g');
        // -대신 사용한 #을 다시 -로 변환
        return expression.replace(regex, (match) => eval(match.replaceAll('#', '-')));
    };

    const operators = ['*', '+', '#'];
    let max = 0;
    
    const dfs = (exp, selected = Array(3).fill(false)) => {
        // selected가 전부 true만 담겨있을 때 max를 업데이트후 종료(재귀 종료 조건)
        if (selected.every(Boolean)) {
            max = Math.max(max, Math.abs(Number(exp)));
            return;
        }

        for (let i = 0; i < operators.length; i++) {
            // 계산했던 연산자면 넘기기
            if (selected[i]) {
                continue;
            }
            // 연산자 사용후 넘기기위해 트루로 변환
            selected[i] = true;
            // 재귀로 나머지 연산자들 계산
            dfs(calculate(exp, operators[i]), selected);
            // 다음 순서로 연산자 계산을 위해 초기화
            selected[i] = false;
        }
    };

    // -대신에 #을 넣고 계산(음수 계산 때문)
    dfs(expression.replaceAll('-', '#'));
    return max;
}