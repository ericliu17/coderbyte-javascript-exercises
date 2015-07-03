function DivisionStringified(num1,num2) { 

  var quotient = Math.round(num1 / num2).toString().split("");
  var index = 3

  while (quotient.length - index > 0) {
    quotient.splice(quotient.length - index, 0, ",");
    index += 4;
  };

  return quotient.join("");

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());          