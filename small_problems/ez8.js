/*
Given a string of words separated by spaces, write a function that swaps the first
and last letters of every word.

You may assume that every word contains at least one letter, and that the string
will always contain at least one word. You may also assume that each string contains
nothing but words and spaces, and that there are no leading, trailing, or repeated
spaces.

input: string of space separated words
output: string of same words with all first and last letters swapped

reqs: 
  -strings contain at least one letter
  -string always has at least one word
  -strings have only words and spaces

test cases:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

data structure:
array where I can swap elements around with array methods

algo:
split the string into word array
split each word into chars
  length one just return char
  else pop last char and save it to a var, shift first char and save to var
  push the pop, unshift the shift
slam that array back together into a string with spaces
return that string
*/

function swap(strang) {
  let words = strang.split(' ');
  let swappedArr = [];

  words.forEach(word => {
    let charArr = word.split('');
    if (charArr.length < 2) {
      swappedArr.push(charArr);
    } else {
      let first = charArr.shift();
      let last = charArr.pop();
      charArr.unshift(last);
      charArr.push(first);
      swappedArr.push(charArr.join(''));
    }
  })

  let finalShape = swappedArr.join(' ');
  return finalShape;
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
