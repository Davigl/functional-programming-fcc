/*
Recall that in functional programming, changing or altering things is called mutation,
and the outcome is called a side effect. 

A function, ideally, should be a pure function, meaning that it does not cause any side effects.
*/

var fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
