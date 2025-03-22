/*
Counting Up
*/

function sequence(integer) {
  let array = [];

  do {
    array.unshift(integer);
    integer -= 1;
  } while (integer > 0);

  return array;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
