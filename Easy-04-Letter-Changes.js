function LetterChanges(str) { 

  var newString = "";

  for (var i = 0; i < str.length; i++) {

    var code = str[i].charCodeAt();
    var nextLetter = String.fromCharCode(code + 1);
    var letterMatch = str[i].match(/[a-z]/i);
    var vowelMatch = nextLetter.match(/[aeiou]/i);

    if (vowelMatch)
      newString += nextLetter.toUpperCase();
    else if (letterMatch)
      newString += nextLetter;
    else 
      newString += str[i];
  }

  return newString;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           