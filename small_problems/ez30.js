/*
Sequence Count
*/

function sequence(firstInt, secondInt) {
  let resultArr = [];

  while (firstInt > 0) {
    resultArr.unshift(firstInt * secondInt);
    firstInt -= 1;
  }

  return resultArr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []