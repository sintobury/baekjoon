function solution(fees, records) {
    let time = new Array(10000).fill(0);
    let result = new Array(10000).fill("");

    const calculateTime = (a,b) => {
        const [A, B] = [a.split(":"), b.split(":")];
        return (Number(A[0])*60 + Number(A[1])) - (Number(B[0])*60 + Number(B[1]));
    }

    const calculateFee = (time) => {
        if(time<=fees[0]) {
            return fees[1];
        }
        return fees[1] + (Math.ceil((time-fees[0])/fees[2])*fees[3])
    }

    for(let i=0; i<records.length; i++) {
        const record = records[i].split(" ");
        const number = Number(record[1]);
        if(record[2] === "IN") {
            result[number] = record[0];
        } else {
            time[number] += calculateTime(record[0], result[number]);
            result[number] = "";
        }
        console.log(record[2], number, result[number], time[number])
    }
    result.forEach((el,idx) => {
        if(el !== "") {
            time[idx] += calculateTime("23:59", el)
    }})
    time = time.filter((el)=> el!==0);
    console.log(time)
    let answer = time.map((el) => calculateFee(el));
    return answer;
}

console.log(solution([120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"]))