function PowersofTwo(num) { 

  while (num > 2) {
    num /= 2;
  };
  
  return num === 2;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());           