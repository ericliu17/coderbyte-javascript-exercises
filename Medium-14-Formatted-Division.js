function FormattedDivision(num1,num2) { 

  var arr = (num1 / num2).toFixed(4).split("");
  var decimal = arr.indexOf(".");
  
  if (decimal > 3) {
    for (var i = decimal - 3; i > 0; i -= 3) {
      arr.splice(i, 0, ",");
    };
  };
  
  return arr.join("");
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FormattedDivision(readline());           