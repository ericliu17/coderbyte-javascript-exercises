function PrimeTime(num) { 

  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  
  return true;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeTime(readline());           