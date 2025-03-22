/*
Modify the wordSizes function from the previous exercise to exclude non-letters
when determining word size. For instance, the word size of "it's" is 3, not 4.

same exercise, with an extra step to filter out non-letters, and then count those

algo:
strangs needs a couple more steps than just split
split into words, split words into chars, filter out bad chars, join into good
char words
*/

function wordSizes(strang) {
  let tracker = {};

  if (!strang) return tracker;

  let groups = strang.toLowerCase().split(' ');

  let strangs = [];
  groups.forEach(group => {
    let word = group.split('').filter(char => {
      return (char >= 'a' && char <= 'z');
    })

    strangs.push(word);
  })

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