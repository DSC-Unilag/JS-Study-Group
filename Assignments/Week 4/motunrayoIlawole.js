const checkPrime = (num) => {
   let factor = 0;

   for (let i = 0; i <= num; i++) {
       if (num % i === 0) {
           factor++;
       }
   }
   return factor === 2 ? "Prime Number" : "Not a prime number";
}

console.log(checkPrime(3));
console.log(checkPrime(115));