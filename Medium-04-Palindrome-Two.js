function PalindromeTwo(str) {
  
  var string = str.match(/[a-z]+/ig);
  var oneString = "";
  
  string.forEach(function(word) {
    return oneString += word.toLowerCase();
  });
  
  for (var i = 0; i < oneString.length/2; i++) {
    if (oneString[i] != oneString[oneString.length - 1 - i])
      return false;
  };
  
  return true;
                 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());           