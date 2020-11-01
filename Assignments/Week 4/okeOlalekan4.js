const checkPrime = num => {
    if (num <= 1) {
        return `${num} cannot be a Prime Number`;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return `${num} is not a Prime number`;
            };
        };
    };
    return `${num} is a Prime Number`;
}