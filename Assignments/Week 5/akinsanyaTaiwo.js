//MAGIC EIGHT BALL PROJECT
let arr = [
	"It is certain", "As I see it, yes", 
	"It\'s decidedly so", "Most likely", 
	"Without a doubt", "Outlook good", 
	"Yes - definitely", "Yes", 
	"You may rely on it", "Signs point to yes", 
	'Reply Hazy, try again', "Ask again later", 
	"Better not tell you now", "Cannot predict now",
	"Concentrate and ask again", "Don\'t count on it",
	"My reply is no", "My sources say no", 
	"Outlook not so good", "Very doubtful"
]
let question = prompt('Enter your question');
function randomNumber(max, min) {
	let answer = arr[parseInt(Math.random() * (max - min) + min)];
	console.log(answer)
}
if (question) {
	let answer = arr[parseInt(Math.random() * 9)];
	console.log(answer)
} 
if (question == null) {
	randomNumber(15, 19)
}
if (question == false) {
	randomNumber(10, 14)
}


//ARRAY OF MULTIPLES
function arrNumLength(num, length) {
	let array = [];
	let i;
	for (i = num; i <= (num*length); i += num) { 
		array.push(i);
	}
	console.log(array);
}
arrNumLength(7, 7)


//FIBONACCI SEQUENCE
let array = [0, 1]
function fibSeq(n) {
	let j = array.length;
	while (j < n) {
		array.push(array[j - 1] + array[j - 2]);
		j++;
	}
	return array;
}
console.log(fibSeq(6))