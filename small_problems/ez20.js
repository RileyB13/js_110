/*
List of Digits
*/

function digitList(num) {
  let digit;
  let dumper = [];

  do {
    digit = num % 10;
    dumper.unshift(digit);
    num = (num - digit) / 10;
  } while (num > 0);

  return dumper;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
