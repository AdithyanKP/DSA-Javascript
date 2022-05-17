let array = [
  [1, 2],
  [5, 5],
  [7, 8],
];
//customArryFlat
function customFlat(array, depth = 1) {
  let result = [];
  array.forEach((arr) => {
    if (Array.isArray(arr) && depth > 0) {
      result.push(...customFlat(arr, depth - 1));
    } else result.push(arr);
  });
  return result;
}
console.log(customFlat(array, 1));

//other Method
let result = [];
let final = result.concat(...array);
console.log(final);
