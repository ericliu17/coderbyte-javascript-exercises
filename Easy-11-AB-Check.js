function ABCheck(str) { 

  if (str.match(/(a...b)|(b...a)/gi)) return true;
  else return false;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());           
