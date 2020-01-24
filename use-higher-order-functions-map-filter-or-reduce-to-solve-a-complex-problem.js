/*
We have defined a function named squareList.

You need to complete the code for the squareList function using any combination of map(),
filter(), and reduce() so that it returns a new array containing only the square of only 
the positive integers (decimal numbers are not integers) when an array of real numbers is
passed to it.
*/

const squareList = arr => {
  let decimalsPositives = arr.filter(number => {
    return number > 0 && number % 1 === 0;
  });

  let squareList = decimalsPositives.map(number => {
    return number * number;
  });

  return squareList;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
