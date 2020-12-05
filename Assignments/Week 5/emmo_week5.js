// TASK 1
let possibleAnswer = [
    "It is certain", "As I see it, yes", "Reply Hazy, try again", "Don't count on it", "It's decidedly so",
    "Most likely", "Ask again later", "My reply is no", "Without a doubt", "Outlook good", "Better not tell you now",
    "My sources say no", "Yes - definitely", "Yes", "Cannot predict now", "Outlook not so good",
    "You may rely on it",  "Signs point to yes", "Concentrate and ask again", "Very doubtful"
]
let askQuestion = (question) => {
    let i = Math.floor((Math.random() * 20));
    return `Question: ${question}?
Answer: ${possibleAnswer[i]}.`;
}
console.log(askQuestion("question"));

// TASK 2
let arrayOfMultiple = (num, length) => {
    multipleArray = [];
    for(var i = 1; i <= length; i++) {
        let m = num * i;
        multipleArray.push(m);
    }
    return `the array of the first ${length} multiple of ${num}: [${multipleArray}]`;
}
console.log(arrayOfMultiple(7, 5));

// TASK 3
let first5FibonnaciSequence = (num) => {
    if (num === 1) {
        return [0, 1];
    } else {
        let sequence = first5FibonnaciSequence(num - 1);
        sequence.push(
            sequence[sequence.length - 1] + sequence[sequence.length - 2]
        );
        return sequence;
    }
}
console.log(first5FibonnaciSequence(5));
