function ArithGeo(arr) { 
  
  var arith = [];
  var geo = [];

  for (var i = 0; i < arr.length - 1; i++) {
    arith.push(arr[i+1] - arr[i]);
    geo.push(arr[i+1] / arr[i]);
  };

  function Check(arr) {
    var check = 1;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i+1] !== arr[i]) check = 0;
    };
    return check;
  };

  if (!Check(arith) && !Check(geo))
    return -1;
  else if (Check(arith))
    return "Arithmetic";
  else if (Check(geo))
    return "Geometric";
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());           