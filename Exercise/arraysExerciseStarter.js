// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
// uncomment and declare //
// const ages = (What goes here? Remember the type declaration.)
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
// uncomment and declare //
// const gameBoard = (REMEMBER - 2 dimensional array)
var gameBoard = [[], [], []];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
// HINTS //
// 1. Dont forget your types for the arguments and the return type //
// 2. Maybe a loop for the logic ?
function getTotal(arr) {
  var sum = 0;
  arr.forEach(function (num) {
    sum += num;
  });
  console.log(sum);
  return sum;
}

getTotal([1, 2, 3]);
