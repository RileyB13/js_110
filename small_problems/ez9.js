/*
The parseInt() method converts a string of numeric characters (including an
optional plus or minus sign) to an integer. The method takes 2 arguments where the
first argument is the string we want to convert and the second argument should
always be 10 for our purposes. parseInt() and the Number() method behave similarly.
In this exercise, you will create a function that does the same thing. 

Write a function that takes a string of digits and returns the appropriate number
as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about
invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JS, such as 
String() and Number(). Your function should do this the old-fashioned way and 
calculate the result by analyzing the characters in the string.

we blow up the string into an array
turn the num chars into digits via DIGITs values
reverse that array to get the indices to align with the power of 10 for mult
get all the digits correctly multiplied by some power of 10
reduce to get the sum
return dat sum
*/
const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}

function strToInt(string) {
  let splitsies = string.split('');

  let digiArr = splitsies.map(char => {
    return DIGITS[char];
  })

  let multArr = digiArr.reverse().map((digi, idx) => {
    return digi * (10 ** idx);
  })

  let sum = multArr.reduce((acc, ele) => {
    return acc + ele;
  }, 0)

  return sum;
}

console.log(strToInt('4321') === 4321);
console.log(strToInt('570') === 570);
