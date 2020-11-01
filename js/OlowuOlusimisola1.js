function testPrime(num) {
    var isPrime = true;
    if (num >= 2) {
        if (num == 2 || num == 3) {
            isPrime = true;
        }
        else if (num % 2 == 0) {
            isPrime = false;
        }
        else {
            for (i = 3; i <= Math.floor(math.sqrt(num)); i += 2) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
    }
    else {
        isPrime = false;
    }
    return isPrime;
}