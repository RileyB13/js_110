/*
After Midnight (p.1)

input: num of minutes before or after midnight
output: string in a 24 hr format showing the time '00:00' 'hh:mm'

reqs: 
  -military time
  -midnight is zero



*/
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function timeOfDay(moonNoonMinutes) {
  let absMin;
  let usableMin;

  if (Math.abs(moonNoonMinutes) > MINUTES_IN_DAY) {
    absMin = Math.abs(moonNoonMinutes) % MINUTES_IN_DAY;
  } else {
    absMin = Math.abs(moonNoonMinutes);
  }

  usableMin = (moonNoonMinutes < 0 ? MINUTES_IN_DAY - absMin : absMin);

  let minutesNum = usableMin % MINUTES_IN_HOUR;
  let hoursNum = Math.floor(usableMin / MINUTES_IN_HOUR);

  let minutesStr = String(minutesNum).length < 2 ? `0${minutesNum}` : `${minutesNum}`;
  let hoursStr = String(hoursNum).length < 2 ? `0${hoursNum}` : `${hoursNum}`;

  return `${hoursStr}:${minutesStr}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");




