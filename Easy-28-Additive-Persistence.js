var count = 0;

function AdditivePersistence(num) { 

  while (num > 9) {
    var digits = num.toString().split("");
    num = digits.reduce(function( a, b) {
      return Number(a) + Number(b);
    });
    count++;
  };
 
  return count;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());           