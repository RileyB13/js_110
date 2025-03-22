/*
same thing as last but keep the signage
*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let result = '';
  let sign = signage(num);

  if (sign === '-') num = num * -1;
  
  do {
    let remainder = num % 10;

    num = Math.floor(num / 10);
    result = DIGITS[remainder] + result;
  } while (num > 0);

  result = sign + result;
  return result;
}

function signage(number) {
  if (number < 0) {
    return '-';
  } else if (number > 0) {
    return '+';
  } else {
    return '';
  }
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(-123));
console.log(integerToString(1234567890));