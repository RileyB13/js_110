/*
Write a function that takes an array of numbers and returns an array with the 
same number of elements, but with each element's value being the running total from
the original.

input: array of numbers
output: array of numbers where each element is the running total of summing
all of the elements of the original array.

reqs:
  -it's gonna need to be a new array.
  -empty arrays need to return empty arrays, not zero.

test cases:
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

data structure:
array

algo:
create an array for the new elements to go into
if it's empty jump straight to returning an empty array
use the reduce method to iterate, add, and push the accumulator to my new array
return the new array
*/

function runningTotal(numArr) {
  let finalShape = [];

  if (!numArr.length) return finalShape;

  let sum = 0;

  for (let i = 0; i < numArr.length; i += 1) {
    sum += numArr[i];
    finalShape.push(sum);
  }

  return finalShape;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


