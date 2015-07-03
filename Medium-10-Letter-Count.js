function LetterCount(str) { 

  var arr = str.match(/[a-z]+/ig);
  var counts = [];

  arr.forEach(function(word) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
      for (var j = i + 1; j < word.length; j++) {      
        if (word[i] === word[j]) {
          count++;
        };
      };
    };
    counts.push(count);
  });

  var max = Math.max.apply(null, counts);
  return max === 0 ? -1 : arr[counts.indexOf(max)];
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCount(readline());           