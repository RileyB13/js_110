/*
Reverse It (p. 2)
*/

function reverseWords(original) {
  let wordArr = original.split(' ').map(word => {
    if (word.length > 4) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  })

  return wordArr.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"