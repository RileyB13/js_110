/*
Reverse Number
*/

function reverseNumber(num) {
  let strNumArr = String(num).split('');
  let resultStrNum = strNumArr.reverse().join('');
  return Number(resultStrNum);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1