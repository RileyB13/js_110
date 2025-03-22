/*
Combine two lists
*/

function interleave(arr1, arr2) {
  let plopper = [];

  for (let i = 0; i < arr1.length; i += 1) {
    plopper.push(arr1[i]);
    plopper.push(arr2[i]);
  }

  return plopper;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]