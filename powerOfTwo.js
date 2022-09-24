//The problem is find the given integer is power of two

const powerOfTwoCheck = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
  }
  return true;
};

console.log(powerOfTwoCheck(1));
