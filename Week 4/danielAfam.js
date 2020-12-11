function isPrime(num){
    if (num <= 1) return "Not_Prime";
    if(num === 2) return "Is_Prime";

    let num2 = Math.sqrt(num); // num2 is the square root of num

    for(let i = 2; i <= num2; i++){
        if (num % i === 0){
            return "Not_Prime";
        }//if there's a remainder it iterates the divisor
    }//up until the divisor is <= num2
    return "Is_Prime"
}
