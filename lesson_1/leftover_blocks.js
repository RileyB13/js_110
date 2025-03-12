/*
Building Blocks used to create a 'valid' structure.
-blocks are cubes.
-structure is built in layers.
-top layer is a single block.
-block in an upper layer must be supported by four blocks underneath
-block in lower layer can support more than one block above
-cannot leave gaps between blocks.
-all cubes are the same size?

Having leftover cubes assumes that every cube on the lower layer must be
supporting at least one cube above. Otherwise you could assemble leftover
cubes around the perimeter of the lowest layer in the width dimension even if
they couldn't contribute to the height of the structure.

layer number = sqrt of num of blocks in layer
layer num * layer num = num blocks in layer

input: number of cubes
output: leftover number of cubes

-E-
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true Lower layers must be square
console.log(calculateLeftoverBlocks(14) === 0); //true

-D-
Array of integers where each integer is the number of blocks on a layer.

-A-
-1. Given number of blocks
  -if 0 or 1 jump return 0 leftovers
-2. Create empty layers array, where each element will be the num of blocks in that
layer.
-3. Create layers until the input number isn't enough to create a new valid layer
  -createLayer
  -check block sum with input block num every iteration to see if we can make
    another layer

-4. Determine the sum of all blocks in all layers.
-5. Subtract input number by this sum to determine leftover.
-last. Return number of leftover blocks

if the sum of all the blocks in all layers is more than the input number of blocks
with this method, then we need to pop the last element off to get rid of the
incomplete layer, find the sum of all those elements, then subtract that number
from the input number to give us the leftover blocks.
*/

function calculateLeftoverBlocks(numOfBlocks) {
  if (numOfBlocks === 0 || numOfBlocks === 1) return 0;

  let layers = [];
  let currentDim = 1;
  
  do {
    layers.push(currentDim * currentDim);
    currentDim += 1;
  } while (needMoreLayers(layers, numOfBlocks))
  
  if (blockSum(layers) === numOfBlocks) return 0;

  layers.pop();

  return numOfBlocks - blockSum(layers);
}

function needMoreLayers(array, numOfBlocks) {
  let sum = blockSum(array);
  return sum < numOfBlocks;
}

function blockSum(array) {
  return array.reduce((a, b) => a + b, 0);
}

// console.log(calculateLeftoverBlocks(0) === 0); //true
// console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true Lower layers must be square
console.log(calculateLeftoverBlocks(14) === 0); //true