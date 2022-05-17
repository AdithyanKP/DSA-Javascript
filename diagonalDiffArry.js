//Diagonal differnce of a square matrix array

const diagonalDifference = (arr) => {
  let ldr = 0; //left diagonal sum
  let rdr = 0; //right diagonal sum

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        ldr += arr[i][j];
      }
      if (i + j === arr.length - 1) rdr += arr[i][j];
    }
  }

  let diff = ldr - rdr;
  return Math.abs(diff);
};

//function calling
const result = diagonalDifference([
  [1, 2, 3],
  [5, 4, 1],
  [8, 9, 0],
]);
console.log(result);
