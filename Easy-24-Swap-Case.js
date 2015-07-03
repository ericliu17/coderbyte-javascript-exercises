function SwapCase(str) { 
  
  var newString = "";

  for (var i = 0; i < str.length; i++) {
    var lowerCase = str[i].match(/[a-z]/);
    var upperCase = str[i].match(/[A-Z]/);
    if (lowerCase)
      newString += str[i].toUpperCase();
    else if (upperCase)
      newString += str[i].toLowerCase();
    else
      newString += str[i];
  }
  return newString;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           