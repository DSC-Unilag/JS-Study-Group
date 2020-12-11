'use strict';

// Question 1
let question = prompt("Please ask a question");
let response = [
    'It is certain.',
    'It is decided so.',
    'Without a doubt',
    'Yes -definitely',
    'You may rely on it',
    'As i see it, yes.',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now.',
    'Concentrate and ask again',
    "Don't count on it.",
    'My reply is no.',
    'My sources say No.',
    'Outlook not so good.',
    'Very doubtful'
];

function magicBall(question, response) {
    let random = Math.trunc(Math.random() * Math.floor(response.length));
    return response[random];
}

console.log(magicBall(question, response));


// Question 2
let arr = [];
function arrayOfMultiples(num, length) {
    for(let i = 0; i <= length; i++) {
        arr[i] = num * (i + 1);
    }
    return arr;
}

console.log(arrayOfMultiples(7, 5));


// Question 3

function fibonacciSeries(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0,1];
    } else {
        let series = fibonacciSeries(n-1);
        series.push(series[n-2] + series[n-3]);
        return series;
    }
}

console.log(fibonacciSeries(20));
