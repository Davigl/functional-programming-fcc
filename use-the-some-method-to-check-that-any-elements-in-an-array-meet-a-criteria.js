/*
Use the some method inside the checkPositive function to check if any element in arr is positive.
The function should return a Boolean value.
*/

function checkPositive(arr) {
  let check = arr.some(number => {
    return number > 0;
  });

  return check;
}

checkPositive([1, 2, 3, -4, 5]);
