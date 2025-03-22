/*
Halvsies

input array
output array of arrays

main problem is how to dump the first half of elements into an array

length 50 goes index 0 - 49, everything up to index 24 in first.
length 51 goes index 0 - 50, everything up to index 25 in first.
length 0 return empties, length 1 return first and an empty
formula is... if .length even, length / 2 - 1 is the boundary. works for 2 upward.
if .length odd, length - 1 / 2 is the boundary
*/

function halvsies(arr) {
  let finalZero = [];
  let finalOne = [];
  let finalOuter = [finalZero, finalOne];
  let boundaryIdx;
  if (arr.length < 1) {
    return finalOuter;
  } else if (arr.length === 1) {
    finalZero.push(arr[0]);
    return finalOuter;
  } else if (arr.length % 2 === 0) {
    boundaryIdx = (arr.length / 2) - 1;
  } else {
    boundaryIdx = (arr.length - 1) / 2; 
  }

  arr.forEach((element, idx) => {
    if (idx <= boundaryIdx) {
      finalZero.push(element);
    } else {
      finalOne.push(element);
    }
  })

  return finalOuter;
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));