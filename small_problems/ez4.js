/*
Number palindromes

input: nums
output: boolean

reqs: 
  -palindromes are the same backwards and forwards
  -these being numbers, they will need coerced to strings
  -return a boolean


test cases:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

data structure:
strings and array

algo:
-convert the number to a string
-turn the string backwards by turning it into an array to use those methods
-return resulting boolean of comparing
*/

function isPalindromicNumber(num) {
  return String(num) === String(num).split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true