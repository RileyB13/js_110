
function dms(number) {
  let num = figurer(number);
  let degrees = String(Math.floor(num));
  let degreeRemainder = num - degrees;
  let minFloat = degreeRemainder * 60;
  let minutes = doubleDigiter(Math.floor(minFloat));
  let minRemainder = minFloat - minutes;
  let seconds = doubleDigiter(Math.floor(minRemainder * 60));

  return `${degrees}\u00B0${minutes}'${seconds}"`;
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));
console.log(dms(-1));
console.log(dms(-400));
console.log(dms(400));
console.log(dms(-1420.8));

function doubleDigiter(number) {
  let strang = String(number);

  if (strang.length < 2) {
    strang = '0' + strang;
  }

  return strang;
}

/*
is number negative or positive
is the abs value over 360 - need remainder subtracted from 360 if neg, added 
  to zero if pos.
*/

function figurer(flatNum) {
  let degreeFromBase;
  if (Math.abs(flatNum) > 360) {
    degreeFromBase = Math.abs(flatNum) % 360;
  } else {
    degreeFromBase = Math.abs(flatNum);
  }

  let fromZero;
  if (flatNum > 0) {
    fromZero = degreeFromBase;
  } else {
    fromZero = 360 - degreeFromBase;
  }

  return fromZero;
}