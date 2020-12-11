// Question 1 

const likelyAnswers = [`It is certain`, `It is decidely so`,`Without a doubt`, `Yes - definitely`,  `You may rely on it`, 
                 `As i see it - yes`, `Most likely`, `Outlook good`, `Yes`, `Signs point to yes`, `Reply hazy, try again`, `Ask again later`, 
                 `Better not tell you now`, `Cannot predict now`, `Concentrate and ask again`, `Don't count on it`,  `My reply is no`, `My sources say no`, 
                 `Outlook noot so good`, `Very doubtful`,
                ];

function getRandomNum() {
    return Math.floor(Math.random() * likelyAnswers.length);
}
function question() {
    let input = prompt( `Type in a question!` );
    if(typeof input === `string` ){
        let index = getRandomNum();
        console.log(likelyAnswers[index]);
    }

}

question();

// Question 2

let arr = [];

function arrayOfMultiples(num, length) {
    for (let index = 1; index <= length; index++) {
        arr.push(num*index);
    }
    return arr;
}

arrayOfMultiples(7,5);

//  Question 3
function memoize(N) {
    fibArray = [0,1]

    for (let index = 2; index < (N+1); index++) {
        fibArray.push(fibArray[index - 1] + fibArray[index - 2]); 
    }

    return fibArray;
}

function fib(N) {
    if (N <= 1) {
        return N;
    } else {
        return memoize(N);
    }
    
}


fib(20);