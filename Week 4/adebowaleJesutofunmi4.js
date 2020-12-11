function primeNumber(n) {
  for (i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(primeNumber(13));
