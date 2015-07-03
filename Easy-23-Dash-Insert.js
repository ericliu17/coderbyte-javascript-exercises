function DashInsert(str) { 

  var string = str.toString().split("");
  var dashed = [];
  
  for (var i = string.length - 1; i > -1; i--) {
    if (string[i]%2 !== 0 && string[i-1]%2 !== 0 && i !== 0)
      dashed.unshift("-", string[i]);
    else
      dashed.unshift(string[i]);
  }
  
  return dashed.join("");
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());           