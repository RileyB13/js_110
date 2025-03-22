/*
Same thing as the last exercise, but we need to account for negative and positive
signs in the string.
*/

const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}

function strToInt(string) {
  let splitsies = string.split('');
  let signage;
  let digiBank = Object.keys(DIGITS);

  if (!digiBank.includes(splitsies[0])) {
    signage = splitsies.shift();
  }

  let digiArr = splitsies.map(char => {
    return DIGITS[char];
  })

  let multArr = digiArr.reverse().map((digi, idx) => {
    return digi * (10 ** idx);
  })

  let sum = multArr.reduce((acc, ele) => {
    return acc + ele;
  }, 0)

  if (signage === '-') {
    sum = 0 - sum;
  }
  console.log(sum);
  return sum;
}

console.log(strToInt('4321') === 4321);
console.log(strToInt('-570') === -570);
console.log(strToInt('+100') === 100);