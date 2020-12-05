// Question 1 : Magic 8 ball project
function ask_question(Question){
    const possible_responses = ["It is certain.", "It is decidely so.", "Without a doubt.", 
                                "yes-definiyely.", "You may rely on it.", "As i see it.", 
                                "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", 
                                "Reply hazy, try again.", "Ask again later.", "Better not tell you now.",
                                "Cannot predict now.", "Concentrate and ask again.", "Don\'t count on it.", 
                                "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
    let x = Math.round(Math.random() * 19); // random numbers between 0 - 19
    return possible_responses[x];                            
}

// Question 2 : Array of multiples
function arrayOfMultiples(multiple,length){
    let Multiples = [];
    for(var i = 0; i < length; i++){
        Multiples[i] = (multiple * (i + 1));
    }
    return Multiples;
}

//Question 3 : Fibonacci Sequence
function fibonacci(num){
    let n1 = 0, n2 = 1, next_term, fib = []; //the 2 first terms of the fibonacci: 0 & 1
    console.log("Fibonacci Sequence:");

    for(var i = 0; i < num; i++){
        fib[i] = n1;
        next_term = n1 + n2;
        n1 = n2;
        n2 = next_term;
    }
    return fib;
}
