/*
Real deal palindrome this time. 

input: string
output: boolean

explicit:
  -palindromes are the same forwards as they are backwards
  -case doesn't matter (make everything lowercase before comparing)
  -only alphanumeric chars matter (filter out all chars that aren't a-z, 0-9)
  -return a boolean if the lowercase filtered string is the same both ways

test cases:
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

data structure:
array for the methods sandwiched with some resulting strings

algo:
-first up we need to strip the passed in string for parts
  -turn the string into lowercase
  -split the string into an array
  -go through all the characters and get rid of all of the chars that don't matter
  -save the forward version to one variable
  -save the reverse version to another variable
-compare those two strings and return the result
*/
let alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789';

function isRealPalindrome(str) {
  let forward = str.toLowerCase().split('').filter(char => {
    return alphaNum.includes(char);
  })

  let backward = forward.slice().reverse();
  backward = backward.join('');
  forward = forward.join('');

  return backward === forward;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

