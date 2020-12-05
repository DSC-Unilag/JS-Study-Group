// Question and Answer
const answer = [
     'It is certain',
     'As I see it, yes',
     'Reply Hazy, try again',
     "Don't count on it",
     "It's decidedly so",
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
     'Very doubtful',
 ];

 question = prompt('Enter Any Question...');

 function findRandom() {
     const randIndex = Math.floor(Math.random() * answer.length);
     console.log(answer[randIndex]);
 }
 findRandom();

// 02. Array of Multiples
function arrayOfMultiples(num, length) {
	var multiples = [];
    for (let i = 0; i  < length; i++) {
    	multiples[i] =  num *  (i + 1);
    }
   console.log(multiples)
}
arrayOfMultiples(12, 10);

// 03. Fiboncci Sequence
 const fibonacciSeries = function(n) {
     if (n === 1) {
         return [0, 1];
     } else {
         const s = fibonacciSeries(n - 1);
         s.push(s[s.length - 1] + s[s.length - 2]);
         return s;
     }
 };
 console.log(fibonacciSeries(9));
