function isPrime(n) {

    if(n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let index = 2; index < n; index++) {
            if(n % index === 0) {
                return false;
            }
        }
        return true;
    }

}

console.log(isPrime(37));