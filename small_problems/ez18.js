/*
Multiplicative Average
*/

function multiplicativeAvg(arr) {
  let multSum = arr.reduce((acc, ele) => acc * ele, 1);
  multAvg = (multSum / arr.length).toFixed(3);
  return String(multAvg);
}

console.log(multiplicativeAvg([3, 5]));                   // "7.500"
console.log(multiplicativeAvg([2, 5, 7, 11, 13, 17]));    // "28361.667"
