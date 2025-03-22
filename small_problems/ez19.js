/*
Multiply Lists
*/

function multiplyList(arr1, arr2) {
  let prodArr = arr1.map((num, idx) => {
    return num * arr2[idx];
  })

  return prodArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]