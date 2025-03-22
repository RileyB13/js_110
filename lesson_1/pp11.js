/*
Create an object that expresses the frequency with which each letter occurs in this
string:
*/

let statement = "The Flintstones Rock";
let counterObj = {};

statement.split(' ').join('').split('').forEach(letter => {
  if (counterObj[letter]) {
    counterObj[letter] += 1;
  } else {
    counterObj[letter] = 1;
  }
});

console.log(counterObj);
