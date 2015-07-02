function powerSet(arr) {
  
  var ps = [[]];
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, l = ps.length; j < l; j++)
      ps.push(ps[j].concat(arr[i]));
  };
  
  return ps;
  
}             

function ArrayAdditionI(arr) { 

  var ps = powerSet(arr), max = Math.max.apply(null, arr), sum;
  
  for (var i = 1; i < ps.length; i++) {
    if (ps[i].length > 1) {
      sum = ps[i].reduce(function(a, b) {
        return a + b;
      });
      if (sum === max) return true;
    };
  };
  
  return false;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());           