function Palindrome(str) { 

  var reversed = "";
  var test = str.replace(/\s/g, "");
  
  for (var i = test.length - 1; i > -1; i--)
    reversed += test[i];
  
  return reversed === test; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());           