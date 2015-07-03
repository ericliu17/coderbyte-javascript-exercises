function sort(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
};

function Consecutive(arr) { 

  return arr[arr.length - 1] - arr[0] - arr.length + 1;
         
};
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Consecutive(sort(readline()));           