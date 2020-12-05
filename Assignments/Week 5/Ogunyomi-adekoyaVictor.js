
let quest = prompt("what is your question? ");
let answer = ["It is certain", "As I see it, yes", "Reply Hazy, try again", "Don't count on it", "It's decidedly so", "Most likely", "Ask again later", "My reply is no", "Without a doubt", "Outlook good", "Better not tell you now", "My sources say no", "Yes - definitely", "Yes", "Cannot predict now", "Outlook not so good", "You may rely on it", "Signs point to yes", "Concentrate and ask again", "Very doubtful"];
function magicBall(quest, answer){
    let random = Math.trunc(Math.random() * Math.floor(answer.length));
    return answer[random];
}
let response = magicBall(quest, answer);
console.log(response);


//number 2

const arrayOfMultiples=(num,length)=>{
    let arr=[]
    for (i=num;i<=(length*num);i+=num){
    arr.push(i)
    }
    console.log(arr)
    }
    
    arrayOfMultiples(7,5)



//number 3
const Fabonacci=(num)=>{
    let arr=[]
    for(i=0;i<=num;i++){
    if(i>=2){
    let val=arr[i-1]+arr[i-2]
    arr.push(val)
    }else{arr.push(i)}
    }
    console.log(arr)
    }
    
    Fabonacci(23)
