// Assignment 5a
   function call() {
     var respond = ["It is certain", "As I see it, yes", "Reply Hazy, try again", "Don't count on it", "It's decidedly so", "Most likely", "Ask again later", "My reply is no", "Without a doubt", "Outlook good", "Better not tell you now", "My sources say no", "Yes - definitely", "Yes", "Cannot predict now", "Outlook not so good", "You may rely on it", "Signs point to yes", "Concentrate and ask again", "Very doubtful"];
     let num = Math.floor(Math.random()* respond.length)  
     console.log(respond[num]);  
   }
   
   call("Will you code with me today?")  
   
   //Assignment 5b
   
   
    var array = [];
    
    function multiples(num, length){
      for(let i =0; i <= length; i++){
        array[i] = num * (i + 1);
        console.log(array);
      }
    }
    
    multiples(5, 7);
    
    
  //Assignment 5c
    
  var fibonacci_sequence = function (n) 
    {
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_sequence(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_sequence(8));