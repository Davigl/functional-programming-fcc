/*
Use the every method inside the checkPositive function to check if every element
in arr is positive. The function should return a Boolean value.
*/

function checkPositive(arr) {
  let check = arr.every(number => {
    return number > 0;
  });

  return check;
}

checkPositive([1, 2, 3, -4, 5]);
