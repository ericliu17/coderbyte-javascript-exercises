function RunLength(str) { 

  var runLength = "";
  var start = 0;
  var count = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i+1] === null || str[i+1] !== str[i]) {
      count = i - start + 1;
      runLength += count + str[i];
      start = i+1;
    };
  };
  
  return runLength;    
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());           