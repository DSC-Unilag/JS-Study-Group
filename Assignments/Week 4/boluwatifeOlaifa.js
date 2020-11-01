const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}


let num=12;
isPrime(num)?console.log(`${num} is a prime number`):console.log(`${num} is not a prime number`)
