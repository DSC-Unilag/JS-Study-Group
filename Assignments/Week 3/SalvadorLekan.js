const squareSum = (num, result = 1) => {
  if (num === 1) return result;
  return squareSum(num - 1, result + num * num);
};

console.log(squareSum(1));
