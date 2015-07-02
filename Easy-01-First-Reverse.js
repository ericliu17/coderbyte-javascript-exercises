function FirstReverse(str) { 

  var str2 = "";
  for (var i = str.length - 1; i > -1; i--) {
    str2 += str[i];
  }
  str = str2;
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());           

//OR

function FirstReverse(str) { 

  var result = [];
  str.split("").forEach(function(letter) {
    result.unshift(letter);
  });
  return result.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());   