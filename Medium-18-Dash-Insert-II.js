function DashInsertII(num) { 

  var arr = num.toString().split("");
  var newArr = [];

  for (var i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
    if (arr[i] > 0 && arr[i + 1] > 0) {
      if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
        newArr.push("*");
      } 
      else if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
        newArr.push("-");
      };
    };
  };
  
  newArr.push(arr[arr.length - 1]);
  return newArr.join("");
         
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsertII(readline());           