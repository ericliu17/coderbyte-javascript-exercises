function FirstFactorial(num) { 

  var factorial = 1;
  for (var i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());

//OR

function FirstFactorial(num) { 

  return num > 0 ? num * FirstFactorial(num - 1) : 1;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());                   