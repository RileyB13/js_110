/*
Name Swapping
*/

function swapName(regName) {
  return regName.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));
