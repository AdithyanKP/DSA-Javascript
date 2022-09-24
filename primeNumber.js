// problem
//check the natural number n is primenumber or not

const primeNumberCheck = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
};

console.log(primeNumberCheck(4));
