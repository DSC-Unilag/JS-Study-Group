 var list = ["It is certain", "As I see it, yes", "Reply Hazy, try again", "Don't count on it", "It's decidedly so", "Most likely", "Ask again later", "My reply is no", "Without a doubt", "Outlook good", "Better not tell you now", "My sources say no", "Yes - definitely", "Yes", "Cannot predict now", "Outlook not so good", "You may rely on it", "Signs point to yes", "Concentrate and ask again", "Very doubtful"]

 var num = Math.round(Math.random()*20);

 console.log(list[num])

 
 function arrayOfMultiples(num1,num2){
    const res = [];
   for(let i = num1; i <= num1 * num2; i += num1){
      res.push(i);
   };
   return res;
};
 
console.log(arrayOfMultiples(2,3))

 function fibonacci(n){
    if (n===1) 
    {
      return [0, 1];
    } 
    else 
    {
      var s = fibonacci_series(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
 }
 console.log(fibonacci(7))