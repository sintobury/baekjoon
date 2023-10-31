function solution(arr1, arr2) {
    let answer = [];
    let row = arr1[0].length;
    for(let i=0; i<arr1.length; i++) { 
        let first = [];
        for(let k=0; k<arr2[0].length; k++) {
            let sum = 0;
            for(let j=0; j<row; j++) {
                let element = arr1[i][j]*arr2[j][k];
                sum += element;
            }
            first.push(sum);
        }
        answer.push(first);
    }
    return answer;
}

solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])