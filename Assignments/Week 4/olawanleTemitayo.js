function primeNumbers(number) {
    if (number === 1) 
    return "This is not a prime number";
    if (number === 2) 
    return "This is a prime number";
    else
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
        return "This is not a prime number";
        }
        return "This is a prime number";
    }
}

console.log(primeNumbers(6));
