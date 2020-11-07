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