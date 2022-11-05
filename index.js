
let INPUT1  = [4,8,9,7];
let INPUT2  = [0,0,, -48565,9,1,0, 9, 8 , 1235];

function sumMaxMin(array){
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  array.forEach(number=>{
    if(number>max) {max = number;}
    if(number<min) {min = number;}
  })
  return {
    sum: min+max,
    min: min,
    max: max
  };
}

console.log(sumMaxMin(INPUT1));
console.log(sumMaxMin(INPUT2));
