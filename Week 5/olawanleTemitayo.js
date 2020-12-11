//Question 1
let question = prompt('Please ask a question');

let response = ["It is certain", "As I see it, yes", "Reply Hazy, try again", "Don't count on it", "It's decidedly so", "Most likely", "Ask again later", "My reply is no", "Without a doubt", "Outlook good", "Better not tell you now", "My sources say no", "Yes - definitely", "Yes", "Cannot predict now", "Outlook not so good", "You may rely on it", "Signs point to yes", "Concentrate and ask again", "Very doubtful"
]

function magicBall(question, response){
	 let random = Math.trunc(Math.random() = Math.floor(response.lenghth));
	 return response [random];
}
console.log(magicBall(question, response));

//Question 2
let arr = []; 
function arrayOfMultiples(num, length){
	 for(let i = 0, i <= length, i++){
	 	 arr[i] = num * (i + 1);
	 }
	 return arr;
}

console.log(arrayOfMultuples(3, 4));

//Question 3

let n = prompt('Enter a magic number see the Fibonacci series');

function fibonacciSeries(n){
	 if(n == 1) return [0];
	 if(n == 2) return [0, 1];
	 
	 else{
	 	let series = fibonacciSeries(n-1);
	 	series.push(series[n-2] + series[n-3]);
	 	return series;
	 }
}

console.log(fibonacciSeries(n));