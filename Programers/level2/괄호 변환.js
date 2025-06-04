function solution(p) {
    // 빈 문자열이면 빈 문자열 반환
    if (!p) return ""

    // p를 u와 v로 분리 u는 (와 )의 숫자가 같은 걸로 더이상 나눠지면 안됨 v는 빈 문자열 가능
    let [u, v] = ["", ""]
    // a = ( 갯수 b = ) 갯수
    let [a, b] = [0, 0]
    for (let i=0; i<p.length; i++) {
        p[i] === '(' ? ++a : ++b
        u += p[i]
        if (a === b) {
            // 균형있는 괄호 = ()숫자가 같은 경우 
            // 이 경우에 나머지를 v로 저장
            v = p.slice(i + 1, p.length)
            break
        }
    }
    // u가 )로 끝나는 경우 균형잡힌 괄호가 아닌 올바른 괄호이므로 v만 재귀 
    if (u[u.length - 1] === ')') {
        return u + solution(v)
    } else {
        // 아닌 경우에는 제일 앞과 제일 뒤를 때고 괄호들을 뒤집기
        u = u.slice(1, u.length - 1).split("")
        for (let i=0; i<u.length; i++) {
            u[i] = u[i] === ')' ? '(' : ')'
        }
        // 이후 v를 재귀하고 앞뒤에 괄호로 감싸고 뒤에 앞뒤를 자르고 괄호를 뒤집은 u를 합쳐줍니다.
        return "(" + solution(v) + ")" + u.join("")
    }
}