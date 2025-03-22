/*
Double Char (p. 2)
*/
const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';

function doubleConsonants(str) {
  let needsJoining = str.split('').map(char => {
    if (CONSONANTS.includes(char.toLowerCase())) {
      return char + char;
    } else {
      return char;
    }
  })
  
  return needsJoining.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""