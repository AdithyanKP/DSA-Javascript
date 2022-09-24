//The problem is find the given integer is power of two

const powerOfTwoCheck = (n) => {
  if (n % 2 === 0) {
    return true;
  }
  return false;
};

console.log(powerOfTwoCheck(1));
