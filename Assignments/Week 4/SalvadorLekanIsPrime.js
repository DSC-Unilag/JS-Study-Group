const isPrime = (num, devisor = num - 1) => {
  // The Above means if no number is supplied for second argument, use first argument - 1
  if (devisor === 1) return true; // If you get to one in your recursion it is a prime
  if (num % devisor === 0) return false;
  // If you ever get a whole number in your division; not a prime
  else return isPrime(num, devisor - 1); // Recursion baby 😍
};

const checkPrime = (num) => {
  //  if a number is not supplied, reject.
  if (typeof num != "number" || isNaN(num)) return false;
  // Check if not a floating point number or less than two
  if (Math.round(num) != num || num < 2) return false;

  return isPrime(num);
};

checkPrime(5);
