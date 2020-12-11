let questionOneArray = [
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
let para = document.querySelector("p");
let inputField = document.querySelector("#question-box");
let button = document.querySelector("#submit");
let responseText;


button.addEventListener("click", response);

function response() {
		  responseText = questionOneArray[Math.floor(Math.random() * questionOneArray.length)];
		  para.textContent = responseText;
}

// Question 2
let questionTwoArray = [];
function multiples(num, length) {
	for(i = 0; i <= length; i++) {
		questionTwoArray[i] = num * (i + 1);
	}
	console.log(questionTwoArray);
}
multiples(4,8);


// Question 3
let questionThreeArray = [];
function fibonacci(n) {
		for (i = 0; i <= n; i++) {
			if (i >= 2) {
				let num = questionThreeArray[i - 1]+ questionThreeArray[i - 2];
				questionThreeArray.push(num);
			}
			else {
				questionThreeArray.push(i);
			}
		}
	console.log(questionThreeArray);
}
fibonacci(8);