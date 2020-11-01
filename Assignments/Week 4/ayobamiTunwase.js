/**
 * Returns a boolean indicating if a number is prime or not
 * 
 * @param {number} number The number to be checked 
 */
const checkPrimeNumber = number => {
    const factors = [];
    if (number <= 1) {return false;}
    {
        let i = 2;
        while (!factors.length) {
            number % i === 0 && factors.push(i);
            i++;
        }
    }
    return factors[0] === number;
};
console.log(checkPrimeNumber(1001));