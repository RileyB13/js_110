/*
How Many?
*/

function countOccurrences(array) {
  let dumper = {};

  array.forEach(element => {
    if (dumper[element]) {
      dumper[element] += 1;
    } else {
      dumper[element] = 1;
    }
  })

  for (let word in dumper) {
    console.log(`${word} => ${dumper[word]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1