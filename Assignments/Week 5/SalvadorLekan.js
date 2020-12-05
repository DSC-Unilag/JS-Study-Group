const responses = [
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
  "Very doubtful",
];
const magicBall = (q) => {
  const index = Math.floor(Math.random() * responses.length + 1);
  return responses[index];
};
magicBall("Working?");

const arrayOfMultiples = (x, y) => {
  const result = [];
  for (let i = 1; i <= y; i++) {
    result.push(x * i);
  }

  return result;
};

arrayOfMultiples(7, 5);

const fibList = (n) => {
  const list = [0];
  const fib = (num) => {
    if (num < 2) return 1;
    else return fib(num - 1) + fib(num - 2);
  };
  for (let i = 0; i < n; i++) {
    list.push(fib(i));
  }
  console.log(list);
  return list;
};
fibList(9);
