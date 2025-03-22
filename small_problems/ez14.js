function union(arr1, arr2) {
  let newEles = arr2.filter(element => {
    return !arr1.includes(element);
  })

  arr1.push(newEles)
  let finalShape = arr1.flat();
  return finalShape;
}

console.log(union([1, 3, 5], [3, 6, 9]));