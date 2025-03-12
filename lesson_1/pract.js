/*
-P-
input: integer representing the number of a particular row
output: integer representing the sum of all integers in that row
rules:
  -explicit-
    -Sequence of integers
    -Sequence begins with 2
    -Integers are consecutive
    -Integers are even
    -Sequence is grouped into rows
  -implicit-
    -row 1 has 1 ele, row 2 has 2 eles, row 3 has 3 eles

2
4 6
8 10 12
14 16 18 20

-E- 
Row number: 1 => Sum of integers in row: 2
Row number: 2 => Sum of integers in row: 10
Row number: 4 => Sum of integers in row: 68

-D-
-Sequence of rows
-Order of rows is important
-Rows contain integers
-Order of integers is important

[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20]
]

-A-
-1. Create an empty 'rows' array to hold all of our rows
-2. Create a 'row' array and add it to the overall 'rows' array
-3. Repeat step 2 until all the necessary rows have been created
  -stop row generation when outer array length equals input
-4. Sum the final row
-5. Return the sum

--sub-prob--
p- create a row
rules: 
  -row is an array
  -array contains integers
  -integers are consecutive and even
  -integers in each row form part of a larger overall sequence
  -rows are of different lengths

  input: 
    -length of the row
    -starting integer
  output: row itself

examples:
  -start: 2, length: 1 --> [2]
  -start: 4, length: 2 --> [4, 6]
  -start: 8, length: 3 --> [8, 10, 12]
  -start: 14, length: 4 --> [14, 16, 18, 20]
  -start: 22, length: 5 --> [22, 24, 26, 28, 30]

data structure: array

-a-
-1. create an empty 'row' to contain integers
-2. add starting integer to 'row'
-3. increment starting integer by 2 to get the next int in sequence
-4. repeat step 2 & 3 until array has reached correct length
-5. return 'row' array
*/

function rowMakr(startInt, rowLength) {
  let row = [];
  let counter = 1;
  let element = startInt;

  while (counter < rowLength) {
    row.push(element);
    element += 2;
    counter += 1;
  }

  return row;
}

function sumEvenNumberRow(rowNumber) {
  let rows = [];
  let sequence = 2;
  let count = 1;
  let lastRow;

  while (count <= rowNumber) {
    rows.push(rowMakr(sequence, count));
    lastRow = rows[rows.length - 1];
    sequence = lastRow[lastRow.length -1] + 2;
    count += 1;
  }

  let sum = lastRow.reduce((acc, ele) => {
    return acc + ele;
  }, 0)

  return sum;
}



//Row number: 1 => Sum of integers in row: 2
//Row number: 2 => Sum of integers in row: 10
//Row number: 4 => Sum of integers in row: 68

console.log(sumEvenNumberRow(1));
console.log(sumEvenNumberRow(2));
console.log(sumEvenNumberRow(4));

// -start: 2, length: 1 --> [2]
// -start: 4, length: 2 --> [4, 6]
// -start: 8, length: 3 --> [8, 10, 12]
// -start: 14, length: 4 --> [14, 16, 18, 20]
// -start: 22, length: 5 --> [22, 24, 26, 28, 30]

console.log(rowMakr(2, 1));
console.log(rowMakr(4, 2));
console.log(rowMakr(8, 3));
console.log(rowMakr(14, 4));
console.log(rowMakr(22, 5));
