/*
input: 6 numbers from the user
output: a string describing whether the last number is the same as one of the first
five numbers.

  explicit reqs: 
    -the user inputs are all numbers.
    -I need a looping structure that will ask for the user's input 6 times
    -these are kind of implicit, but the problem set up doesn't have a ton of explicit

test cases:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

data structure: array to put numbers into

algo:

make an array called numbers
loop 6 times asking the user for a number and increasing the ordinal number
the first 5 numbers should be pushed into the numbers array
the last number will be used to check the array for a match
return a message displaying the findings
*/
let readline = require('readline-sync');

let numbers = [];
let ordinals = ['1st', '2nd', '3rd', '4th', '5th'];

for (let i = 0; i < 5; i += 1) {
  let ordinal = ordinals[i];
  let num = Number(readline.question(`Enter the ${ordinal} number: `));

  numbers.push(num);
}

let last = Number(readline.question(`Enter the last number: `));

if (numbers.includes(last)) {
  console.log(`The number ${last} appears in ${numbers}.`);
} else {
  console.log(`The number ${last} does not appear in ${numbers}.`);
}

