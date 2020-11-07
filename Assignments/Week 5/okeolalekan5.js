//1.) Make a program that generates an answer when asked a 
//question

const answers = [`It is certain`,
                 `It is decidely so`,
                 `Without a doubt`,
                 `Yes - definitely`, 
                 `You may rely on it`, 
                 `As i see it - yes`, 
                 `Most likely`, 
                 `Outlook good`, 
                 `Yes`, 
                 `Signs point to yes`, 
                 `Reply hazy, try again`, 
                 `Ask again later`, 
                 `Better not tell you now`, 
                 `Cannot predict now`, 
                 `Concentrate and ask again`, 
                 `Don't count on it`, 
                 `My reply is no`, 
                 `My sources say no`, 
                 `Outlook noot so good`, 
                 `Very doubtful`,
                ]

const generateRandomNumber = () => {
    return Math.floor(Math.random() * answers.length)
}

const question = () => {
    let input = prompt( `Type in a question!` );
    if( input.includes( '?' ) && typeof input === `string` ){
        let index = generateRandomNumber();
        return console.log(input, answers[index]);
    }else if ( !( input.includes(`?`) && typeof input === `string` ) ) {
        return console.log(`You forgot to add "?" hence it's not a question`);
    } 
}

//End of Question 1

//2.) Create a function that takes two numbers as arguments
// (num, length) and returns an array of multiples of num
// until the array length reaches length

const array = []
const arrayOfMultiples = (num, length) => {
    array.splice(0, array.length);
    if(length === 0) {
        return array;
    }else{
        for ( let ind = array.length; ind < length; ind++) {
            if(array.length === 0){
                array.push(num);    
            }else {
                element = array[ind - 1];
                array.push(element + num);
            };
        }; 
    }
    return array;
}
//End of Question 2


// 3.) Fibonacci sequence

const fibonacciSequence = [];

const fibSeq = (n) => {
    fibonacciSequence.splice(0, fibonacciSequence.length);
    if (n === 0){
        return fibonacciSequence.push(0);
    }else if (n === 1){
        return fibonacciSequence.push(0,1);
    }else if (n > 1){
        fibonacciSequence.push(0,1);
        for( i = 2; i < n; i++ ){
            let counter_1 = fibonacciSequence[i - 1];
            let counter_2 = fibonacciSequence[i - 2];
            fibonacciSequence.push(counter_1 + counter_2);
        }
    }
    let value = fibonacciSequence[n-1]
    return (fibonacciSequence, `The ${n} fibonacci sewuence number is ${value}`);
}

// End of Question 3