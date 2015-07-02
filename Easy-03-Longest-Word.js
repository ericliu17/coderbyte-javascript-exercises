function LongestWord(sen) { 

  var words = sen.match(/[a-z]+/gi);
  var largest = "";
  words.forEach(function(word) {
    if (word.length > largest.length)
      largest = word;
  });
  return largest;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           