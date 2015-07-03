function CountingMinutesI(str) { 

  var time = [];
  str.match(/\d+/g).forEach(function(string) {
    return time.push(Number(string));
  });
  var amPM = str.match(/[a-z]+/g);
  
  if (amPM[0] == amPM[1] && ((time[2] == time[0] && time[3] <= time[1]) || 
      (time[0] != 12 && (time[2] == 12 || time[2] < time[0]))))
    return (time[2] + 24 - time[0]) * 60 + time[3] - time[1];
  else if (amPM[0] != amPM[1])
    return (time[2] + 12 - time[0]) * 60 + time[3] - time[1];
  else 
    return (time[2] - time[0]) * 60 + time[3] - time[1];
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());           