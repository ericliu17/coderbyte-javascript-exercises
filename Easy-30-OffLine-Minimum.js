function OffLineMinimum(strArr) { 

  var allNum = [];
  var lowest = [];

  strArr.forEach(function(element) {
    if (element !== "E") {
      allNum.push(Number(element));
    }
    else {
      var min = Math.min(...allNum);
      lowest.push(min);
      allNum.splice(allNum.indexOf(min), 1);
    };
  });
  
  return lowest.join(",");
        
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OffLineMinimum(readline());           