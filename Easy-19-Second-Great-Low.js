function SecondGreatLow(arr) { 
  
  arr.sort(function(a, b) {
    return a - b;
  });
  
  var secondMax = arr[arr.length - 2], secondMin = arr[1];  
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[arr.length - 1])
      secondMax = arr[i];
  };
  
  for (var i = arr.length - 1; i > -1; i--) {
    if (arr[i] > arr[0])
      secondMin = arr[i];
  };
  
  return secondMin + " " + secondMax;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());           