function LetterCapitalize(str) { 

  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    if (i === 0 || str[i-1] === " ")
      newStr += str[i].toUpperCase();
    else
      newStr += str[i];
  };

  return newStr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());          