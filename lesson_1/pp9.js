/*
Add up all of the ages from the Munster family object:
*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let agesArr = Object.values(ages);

let sumAges = agesArr.reduce((acc, ele) => acc + ele, 0);

console.log(sumAges);
