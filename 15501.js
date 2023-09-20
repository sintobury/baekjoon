const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let fir = input[1].trim().split(' ');
let sec = input[2].trim().split(' ');
let secR = sec.slice().reverse();
//좌우비교 , 리버스후 좌우비교
for(let i=1; i<n; i++){
    if(i===n-1){
        console.log('good puzzle');
        break;
    }
    if((fir[n-1]===sec[sec.indexOf(fir[0])-1])&&(fir[1]===sec[sec.indexOf(fir[0])+1])){
        continue;
    }else if((fir[n-1]===sec[sec.indexOf(fir[0])+1])&&(fir[1]===sec[sec.indexOf(fir[0])-1])){
        continue;
    }else if((fir[0]===sec[sec.indexOf(fir[n-1])+1])&&(fir[n-2]===sec[sec.indexOf(fir[n-1])-1])){
        continue;
    }else if((fir[0]===sec[sec.indexOf(fir[n-1])-1])&&(fir[n-2]===sec[sec.indexOf(fir[n-1])+1])){
        continue;
    }else if(fir.slice(i-1,i+2)===sec.slice(sec.indexOf(fir[i])-1,sec.indexOf(fir[i])+2)){
        continue;
    }else if(fir.slice(i-1,i+2)===secR.slice(secR.indexOf(fir[i])-1,secR.indexOf(fir[i])+2)){
        continue;
    }else {
        console.log('bad puzzle');
        break;
    }
}