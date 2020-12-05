/**
 * Returns a randomly generated answer to the user's question
 *
 * @param {string} question The user's question
 */
const magicEightBall = (question) => {
    const possibleResponses = [
        'It is certain',
        'As I see it, yes',
        'Reply hazy, try again',
        "Don't count on it",
        'It is decidedly so',
        'Most likely',
        'Ask again later',
        'My reply is no',
        'Without a doubt',
        'Outlook good',
        'Better not tell you now',
        'My sources say no',
        'Yes - definitely',
        'Yes',
        'Cannot predict now',
        'Outlook not so good',
        'You may rely on it',
        'Signs point to yes',
        'Concentrate and ask again',
        'Very doubtful'
    ];
    const randomIndex = Math.floor(Math.random() * possibleResponses.length);
    const answer = `${possibleResponses[randomIndex]}.`;

    return question ? answer : 'Please ask a question.';
};
console.log(magicEightBall('Yo'));

/**
 * Returns an array of multiples of a number (num) with length (length)
 *
 * @param {number} num The number from which multiples are derived
 * @param {number} length The number of multiples to be returned
 */
const arrayOfMultiples = (num, length) => {
    const multiples = [];
    for (let i = 1; i <= length; i++) multiples.push(num * i);

    return multiples;
};
console.log(arrayOfMultiples(8, 5));

/**
 * Returns an array of fibonacci numbers of length (n)
 *
 * @param {number} n The length of the fibonacci array
 */
const arrayOfFibonacci = (n) => {
    const fibonacciArray = [];

    if (n <= 0) {
        return fibonacciArray;
    } else if (n === 1) {
        fibonacciArray.push(0);
    } else {
        fibonacciArray.push(0);
        fibonacciArray.push(1);

        while (fibonacciArray.length < n) {
            const [secondToLastElement, lastElement] = [
                fibonacciArray[fibonacciArray.length - 2],
                fibonacciArray[fibonacciArray.length - 1]
            ];
            fibonacciArray.push(secondToLastElement + lastElement);
        }
    }

    return fibonacciArray;
};
console.log(arrayOfFibonacci(10));
