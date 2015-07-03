function ThirdGreatest(strArr) {
  
  var count = 0;
  var greatest = 0;
  var lengths = [];
  var index = [];        
  
  strArr.forEach(function(word) {
    lengths.push(word.length);
  });

  strArr.forEach(function(word) {
    index.push(strArr.indexOf(word));
  });
  
  while (count < 2) {
    greatest = Math.max(...lengths);
    index.splice(lengths.indexOf(greatest), 1);
    lengths.splice(lengths.indexOf(greatest), 1);
    count++;
  };
  
  greatest = Math.max(...lengths);
  return strArr[index[lengths.indexOf(greatest)]];  
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThirdGreatest(readline());           