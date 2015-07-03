function MeanMode(arr) { 

  var sum = arr.reduce(function(a, b) {
    return (a + b);
  });
  var mean = sum/arr.length;
  var mode = 0;
  
  for (var i = arr.length - 1; i > 0; i--) {
    if (arr[i] === arr[i-1])
      mode = arr[i];
  }
  
  return Number(mean === mode);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());           