/*
-P-
input: array of strings
output: new array of strings, sorted
rules:
  -Explicit:
    -sorted depending on highest number of adjacent consonants
    -two strings with the same highest number retain original order
    -consonants are adjacent if they are next to each other or separated by a space
    -y & w are consonants

  -Implicit:
    -strings could be multiple words
    -original strings must stay intact

  questions: 
    -is the order ascending or descending? descending highest to lowest
    -just alpha chars with spaces? looks like it
    -clarity on highest number of adjacent consonants... not cumulative of entire,
      but length of longest consonant streak of at least two or more consonants in
      a string? correct
      'brrr' = 4
      'brarrarrarr' = 2

-E-
let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

-D-
This seems like it would be useful to use an object in order to tag each string
with a count of their adj. consonants as a value by which to sort.

-A-
-1. given array of strings
-2. create an empty object called count tracker
-3a. determine the highest adj. cons. in each string.
-3b. populate the object with strings as keys and the adj cons count as values
-4. populate new array with string elements in descending order of adj cons
-last. return sorted array of strings

how do we go about counting the adjacent consonants in a single string

if a letter isn't aieou then we start the counter
once we hit a vowel the count stops, and we need a way to store the number and 
clear the counter
I think we make an array, and when a string has adjacency we put an element into
an array, then we need to sort that array to see the highest number to guard for the
instance where a string has a couple pockets of adjacency with one larger than the
other. 
The largest number from the array gets stored as the adjacency score value
for that string in the tracker object, which tracks all the We use the scores in 
that object.
Once our object is populated with the highest score from all the strings, we sort
the corresponding elements of the passed in array in descending order according to
that score.

The object thing ended up being a dead end. I really don't know how I would have
gotten it to work. I need to work on sorting big time.
-C-
*/

const NO_VOWELS = 'bcdfghjklmnpqrstvwxyz';

function sortStringsByConsonants(array) {
  let arrCopy = array.slice();

  let sortedArr = arrCopy.sort((a, b) => {
    return adjacencyScorer(b) - adjacencyScorer(a);
  })

  return sortedArr;
}

function adjacencyScorer(str) {
  let stripped = str.split(' ').join('');
  let scoreArr = [];
  let score = 0;
  
  for (let i = 0; i < stripped.length; i += 1) {
    if (NO_VOWELS.includes(stripped[i])) {
      score += 1;
    } else {
      scoreArr.push(score);
      score = 0;
    }
  }

  scoreArr.push(score);

  scoreArr.sort((a, b) => b - a);

  if (scoreArr[0] === 1) return 0;

  return scoreArr[0];
}




let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa'] 

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

