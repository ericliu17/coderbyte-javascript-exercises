function VowelCount(str) { 

  var count = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/i))
      count++;
  };
  
  return count; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           

//OR

function VowelCount(str) { 

  var vowels = str.match(/[aeiou]/ig);
  return vowels.length;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           