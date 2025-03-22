/*
Write a program that uses this array to create an object where the names are the 
keys and the values are the positions in the array:
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let jurassic = {};

flintstones.forEach((character, idx) => {
  jurassic[character] = idx;
});

console.log(jurassic);

