var count = 0;

function MultiplicativePersistence(num) { 

  if (num >= 10) {
    count++;
    var numArray = num.toString().split("");
    var product = numArray.reduce(function(a, b) {
      return Number(a) * Number(b);
    });
    MultiplicativePersistence(product);
  };
  
  return count;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());           