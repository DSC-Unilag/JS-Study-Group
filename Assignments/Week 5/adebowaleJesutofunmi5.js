var magic8Ball = {};
magic8Ball.listofanswers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
];

magic8Ball.getAnswer = function (question) {
  let randomNumber = Math.random();
  let randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
  let answer = this.listofanswers[randomAnswer];

  console.log(question);
  console.log(answer);
};

var question = prompt("What do you want to know?");
magic8Ball.getAnswer(question);

// 2
function multiplesOf(num, length) {
  let res = [];
  for (let i = num; i <= num * length; i += num) {
    res.push(i);
  }
  return res;
}
console.log(multiplesOf(17, 6));

//FIBONACCI SEQUENCE
function fibonacci(n) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  let i = 0;
  for (i = 0; i < n; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}
console.log(fibonacci(10));
