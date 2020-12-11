/********** ONE **********/

const answers = ["It is certain", "As I see it, yes", "Reply Hazy, try again", "Don't count on it", "It's decidedly so", "Most likely", "Ask again later", "My reply is no", "Without a doubt", "Outlook good", "Better not tell you now", "My sources say no", "Yes - definitely", "Yes", "Cannot predict now", "Outlook not so good", "You may rely on it", "Signs point to yes", "Concentrate and ask again", "Very doubtful"];


const getAnswer = () => {
    const random = Math.floor(Math.random() * answers.length);

    const answer = answers[random];
    return answer;
}

console.log(getAnswer());

/********** TWO **********/

const getMultiples = (num, length) => {
    let multiples = [];

    for (let i = 1; i <= length; i++) {
        multiples.push(num * i);
    }

    return multiples;
}

console.log(getMultiples(7, 5));


/********** THREE **********/

const fibonacci = (n) => {
    let array = [];
    if (n === 1) {
        array = [0];
    }
    else if (n === 2) {
        array = [0, 1];
    }
    else {
        array = [0, 1];
        for (let i = 2; i < n; i++) {
            array.push(array[array.length - 1] + array[array.length - 2]);
        }
    }

    return array;
}

console.log(fibonacci(5));