/*
Fill in the body of the add function so it uses currying to add parameters x, y, and z.
*/

function add(x) {
  return y => {
    return z => {
      return x + y + z;
    };
  };
}

add(10)(20)(30);
