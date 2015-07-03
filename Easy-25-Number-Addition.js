function NumberAddition(string) {
  
  var numbers = string.match(/\d+/g);
  var sum = 0;
  
  if (numbers !== null) {
    sum = numbers.reduce(function(a, b) {
      return Number(a) + Number(b);
    });
  };
  
  return sum;
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());           