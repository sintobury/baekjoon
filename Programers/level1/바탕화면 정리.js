function solution(wallpaper) {
    const memo = {"miny":null,"minx":null,"maxy":null,"maxx":null}
    for(let i=0; i<wallpaper.length; i++) {
        // console.log(i)
        if(wallpaper[i].includes("#")){
            let y = i;
            let Minx = wallpaper[i].indexOf("#");
            let Maxx = wallpaper[i].lastIndexOf("#")+1;
            if(memo.miny === null) {
                memo.miny = y;
                memo.maxy = y;
                memo.minx = Minx;
                memo.maxx = Maxx;
            }
            if(memo.maxy < y+1) {
                memo.maxy = y+1;
            }
            if(memo.maxx < Maxx) {
                memo.maxx = Maxx;
            }
            if(memo.minx > Minx) {
                memo.minx = Minx;
            }
        }
        // console.log(memo)
    }
    return [memo.miny,memo.minx,memo.maxy,memo.maxx];
}

console.log(solution(	["..", "#."]))