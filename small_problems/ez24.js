/*
After Midnight(p.2)
*/
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function beforeMidnight(time) {
  let array = time.split(':');
  let hours = Number(array[0]);
  let minutes = Number(array[1]);
  let totalMin = minutes + (hours * MINUTES_IN_HOUR);
  
  totalMin = MINUTES_IN_DAY - totalMin; 

  if (totalMin === 1440) {
    totalMin = 0;
  }

  return totalMin;
}

function afterMidnight(time) {
  let array = time.split(':');
  let hours = Number(array[0]);
  let minutes = Number(array[1]);
  let totalMin = minutes + (hours * MINUTES_IN_HOUR);
  
  if (totalMin === 1440) {
    totalMin = 0;
  }

  return totalMin;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);