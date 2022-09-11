//factorial of a number

const factorialOF = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
    console.log(result);
  }
  return result;
};

console.log(factorialOF(5));
