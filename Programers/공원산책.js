function solution(park, routes) {
    let ystart = park.findIndex((el)=>el.includes("S"));
    let xstart = park[ystart].indexOf("S");
    const xlength = park[0].length-1;
    const ylength = park.length-1;
    for(let i=0; i<routes.length; i++) {
        const route = routes[i].split(' ')
        const dir = route[0];
        const dis = Number(route[1]);
        // console.log("xstart,ystart", xstart,ystart)
        // console.log("dir", dir)
        // console.log("dis", dis)
        if(dir === "E" ) {
            if(dis + xstart > xlength){
                continue;
            }
            const Erange = park[ystart].slice(xstart+1, xstart+dis+1).split("");
            // console.log("E",Erange)
            if((Erange.every((el)=>el !== "X"))){
                xstart = xstart + dis
            } else {
                continue;
            }
        } else if(dir === "W") {
            if(xstart - dis < 0){
                continue;
            }
            if(xstart-dis <= 0){

            }
            const Wrange = park[ystart].slice(xstart-dis, xstart).split("");
            // console.log("W",Wrange)
            if((Wrange.every((el)=>el !== "X"))){
                xstart = xstart - dis
            } else {
                continue;
            }
        } else if(dir === "S") {
            if(ystart + dis > ylength) {
                continue;
            } 
            const Srange = park.map((el)=> el[xstart]).slice(ystart+1, ystart+dis+1);
            // console.log("S",Srange)
            if(Srange.every((el)=>el !=="X")){
                ystart = ystart + dis
            }
        } else if(dir === "N") {
            if(ystart - dis < 0) {
                continue;
            } 
            const Nrange = park.map((el)=> el[xstart]).slice(ystart-dis, ystart);
            // console.log("N",Nrange)
            if(Nrange.every((el)=>el !=="X")){
                ystart = ystart - dis
            }
        }
    }
    return [ystart,xstart];
}

const park =["SOXOO","OOOOO","OOOOO", "OOOOO", "OOOOO"]
const routes =  ["E 3"]

// console.log(solution(park, routes))
// console.log(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"])); // [2,1]
// console.log(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"])); // [0,1]
// console.log(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"])); // [0,0]

// console.log(solution(["OSO","OOO","OOO","OOO"], ["W 2"])); // [0,1]
// console.log(solution(["OSO","OOO","OOO","OOO"], ["N 2"])); // [0,1]
// console.log(solution(["OSO","OOO","OOO","OOO"], ["S 5"])); // [0,1]
// console.log(solution(["OSO","OOO","OOO","OOO"], ["E 5"])); // [0,1]

// console.log(solution(["XXX","XSX","XXX"], ["E 1"])); // [1,1]
// console.log(solution(["XXX","XSX","XXX"], ["W 1"])); // [1,1]
// console.log(solution(["XXX","XSX","XXX"], ["S 1"])); // [1,1]
// // console.log(solution(["XXX","XSX","XXX"], ["N 1"])); // [1,1]

// console.log(solution(["SOXOO","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["E 3"])); // [0, 0]
// console.log(solution(["SOOOX","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["E 3"])); // [0, 3]
// console.log(solution(["XOOOS","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["W 3"])); // [0, 1]
// console.log(solution(["OOXOS","OOOOO","OOOOO", "OOOOO", "OOOOO"], ["W 3"])); // [0, 4]
// console.log(solution(["SOOOO","OOOOO","XOOOO", "OOOOO", "OOOOO"], ["S 3"])); // [0, 0]
// console.log(solution(["SOOOO","OOOOO","OOOOO", "OOOOO", "XOOOO"], ["S 3"])); // [3, 0]
// console.log(solution(["OOOOO","OOOOO","XOOOO", "OOOOO", "SOOOO"], ["N 3"])); // [4, 0]
// console.log(solution(["XOOOO","OOOOO","OOOOO", "OOOOO", "SOOOO"], ["N 3"])); // [1, 0]