/*
Matching Parentheses?
*/

function isBalanced(string) {
  let aim = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (aim < 0) {
      return false;
    } else if (string[i] === '(') {
      aim += 1;
    } else if (string[i] === ')') {
      aim -= 1;
    }
  }

  return aim === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);