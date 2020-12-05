//Question 1

let question = prompt('What is your question?');

let answer = [

  "It is certain",

  "As I see it, yes",

  "Reply Hazy, try again",

  "Don't count on it",

  "It's decidedly so",

  "Most likely",

  "Ask again later",

  "My reply is no",

  "Without a doubt",

  "Outlook good",

  "Better not tell you now",

  "My sources say no",

  "Yes - definitely",

  "Yes",

  "Cannot predict now",

  "Outlook not so good",

  "You may rely on it",

  "Signs point to yes",

  "Concentrate and ask again",

  "Very doubtful"

  ];

  

  function magicBall (question, answer){

    let random = Math.trunc(Math.random() * Math.floor(answer.length));

    return answer[random];

  }

  

  console.log(magicBall(question, answer));

  

  //Question 2

  let multiples =[];

  function arrayOfMultiples(num, length){

    for (let i = 0; i < length; i++){

      multiples[i] = num * (i+1);

    }

    

    return multiples;

  }

  

  

  console.log(arrayOfMultiples(12,10));

  

  // Question 3

  let n = prompt('Enter a number');

  function fibonacci(n){

    if (n===1) return [0];

    if (n===2) return [0,1];

    else{

      let series = fibonacci(n-1);

      series.push(series[n-2] + series[n-3]);

      return series;

    }

    

    console.log(fibonacci(n));

  }
