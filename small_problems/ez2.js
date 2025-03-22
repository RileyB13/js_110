/*
Write a funciton that returns true if the string passed as an argument is a 
palindrome, or false otherwise. A palindrome reads the same forwards and backwards.
For this problem, the case matters and all characters matter.

input: string
output: boolean

explicit: 
  -palindrome reads the same forwards as backwards. 
  -case matters
  -all characters matter


test cases:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

data structure: I'm going to need to utilize an array method so just strings and 
arrays and comparisons.

algo:

take base string in one variable
have another variable ready for the reversed string we're making next
blow up the base string into an array of all its characters and reverse that array
join it back together and save it in that variable thats waiting for us
compare the two strings for equality and return the boolean result
*/

function isPalindrome(str) {
  let compareStr = str.split('').reverse().join('');

  return compareStr === str;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
