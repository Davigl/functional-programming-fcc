/*
Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then increases the value by one.
*/

var fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
