/*
Use the sort method in the nonMutatingSort function to sort the elements of an 
array in ascending order. 

The function should return a new array, and not mutate the globalArray variable.
*/

var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let sorted = arr.slice().sort((a, b) => {
    return a - b;
  });

  return sorted;
}

console.log(nonMutatingSort(globalArray));
