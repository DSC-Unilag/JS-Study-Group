console.log('What\'s shaking');
var prime = prompt("Enter your number", '0');

function test_prime(prime) {
    if (prime === 1) {
        return 'not a prime number';
    } else if (prime === 2) {
        return 'that\'s a prime number';
    } else {
        for (var x = 2; x < prime; x++) {
            if (prime % x === 0) {
                return 'not a prime number';
            }
        }
        return 'that\'s a prime number';
    }
}
console.log(test_prime(prime));