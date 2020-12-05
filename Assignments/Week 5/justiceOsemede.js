

function enterQuestion (question){
   
    let answers = [
                `It is certain`,
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
    ];

    let random = Math.floor(Math.random()*20);
    
    console.log(`${question} : ${answers[random]}`);
    
}

//enterQuestion();




//MUltiples

function arrayOfMultiples(num, length){

    let p =[];

        for(i=0; i < length; i++){
            
            p[i] = num*(i+1);

        }

        console.log(p);
    
}

//arrayOfMultiples();





//FibonACCI SERIES


const number = parseInt(prompt('Enter the number of terms: ')); let n1 = 0, n2 = 1, nextTerm; console.log('Fibonacci Series:'); for (let i = 1; i <= number; i++
    ) { console.log(n1); nextTerm = n1 + n2; n1 = n2; n2 = nextTerm; }

