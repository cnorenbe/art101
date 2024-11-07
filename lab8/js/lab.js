/*
* Author: Coralie Norenberg <cnorenbe@ucsc.edu>
* Date: October 31
*/

//
let numbers = [4, 9, 16, 25, 36];

//
function squareRoot(x) {
  var results = Math.sqrt(x);
  return results;
}

//
var mapResults = numbers.map(squareRoot);
console.log("Square Roots: ", mapResults);  // Output: [2, 3, 4, 5, 6]

//
var squaredResults = numbers.map(function(x) {
  var results = x * x;  // Square the number
  return results;
});
console.log("Squared Numbers: ", squaredResults);  
// Output: [16, 81, 256, 625, 1296]
