/*
just for going through the material
*/

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable',
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});

console.log(onlyVegetables);

[1, 2, 3].some(ele => {
  console.log(ele);
  return ele === 9;
});


  