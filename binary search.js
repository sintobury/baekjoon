const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.
  const baseSort = base.slice().sort(function(a,b){
    return a-b;
  })
  let isSubset = true;
  for(let i=0; i<sample.length; i++){
    let start = 0;
    let end = base.length-1;
    while(start <= end){
      let mid = Math.floor((start+end)/2);
      if(baseSort[mid] === sample[i] || baseSort[start] === sample[i] || baseSort[end] === sample[i]){
        break;
      } else if(sample[i]< baseSort[start] || baseSort[end] < sample[i]){
        isSubset = false;
        break;
      } else if(baseSort[start] < sample[i] && sample[i] < baseSort[mid]){
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    console.log(isSubset, sample[i])
    if(!isSubset){
      return isSubset;
    } 
  }
  return isSubset
};

console.log(isSubsetOf([10, 99, 123, 7], [7, 99, 123, 10]))