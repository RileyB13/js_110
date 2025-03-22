/*
Write a function that takes a string consisting of zero or more space separated
words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space chars.

input: string of space separated words
output: object counting the number of words of different lengths

reqs:
  -words are any group of non-space chars
  -object has "1" num keys and integer values.
  -empty strings return empty objects.

test cases:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

data structures:
string, array of strings, object for counting

algo:
we need an empty object to dump all this into
break the string into an array of words
iterate over the array and when the length of the current word is a length not yet
  known by our object, create a new tracker k-v pair, else increment the appropriate
  k-v pair by one.
return the final object counter
*/

function wordSizes(strang) {
  let tracker = {};

  if (!strang) return tracker;

  let strangs = strang.split(' ');

  strangs.forEach(word => {
    if (tracker[word.length]) {
      tracker[word.length] += 1;
    } else {
      tracker[word.length] = 1;
    }
  })

  return tracker;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}