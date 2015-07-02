function ExOh(str) { 

  var countX = 0;
  var countO = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "x") countX++;
    else if (str[i] = "o") countO++;
  }
  return countX == countO; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           

//OR

function ExOh(str) { 

  return (str.match(/[x]/ig) ? str.match(/[x]/ig).length : 0) === 
    (str.match(/[o]/ig) ? str.match(/[o]/ig).length : 0);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           