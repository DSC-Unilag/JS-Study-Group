//1

var answers = [
	'it is certain',
	'it is decidedly so',
	'without a doubt',
	'Yes - definetly',
	'You may rely on it',
	'As i see it, yes',
	'Most likely',
	'Outlook good',
	'yes',
	'Signs point to yes',
	'Reply hazy, try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	"Don't count on it",
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
];

const question = () => {
	let name = prompt('Input a question ');
	if (typeof name === 'string') {
		const n = Math.floor(Math.random() * answers.length);
		return console.log(name, answers[n]);
	} else {
		return 'Not a question';
	}
};

//2

const args = (num, length) => {
	const a = [];
	for (let i = 1; i <= length; i++) {
		a.push(num * i);
	}
	return a;
};

//3

const number = parseInt(prompt('Enter the number of terms: '));
let a = 0,
	b = 1,
	nextTerm;
console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
	console.log(a);
	nextTerm = a + b;
	a = b;
	b = nextTerm;
}
