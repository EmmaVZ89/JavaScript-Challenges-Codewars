/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  if(seconds >= 359999) {
    return "99:59:59";
  }
  if(seconds === 0) {
    return "00:00:00";
  }
  let seconds2 = 0;
  let minutes = 0;
  let hours = 0;
  for(let i = 0; i < seconds ; i++) {
    seconds2++;
    if(seconds2 > 59) {
      seconds2 = 0;
      minutes++;
      if(minutes > 59) {
        minutes = 0;
        hours++;
      }
    }
  }
  if(seconds2 < 10) {
    seconds2 = "0"+seconds2;
  }
  if(minutes < 10) {
    minutes = "0"+minutes;
  }
  if(hours < 10) {
    hours = "0"+hours;
  }

  return hours+":"+minutes+":"+seconds2;
}
