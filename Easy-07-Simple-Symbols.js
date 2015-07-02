function SimpleSymbols(str) { 

  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i) &&
        ((i === 0 || i === str.length - 1) || 
        (str[i-1] !== "+" || str[i+1] !== "+")))
      return false;
  };
  
  return true;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           