//Assignment 1-random words

const words=["It is certain", "As I see it, yes", "Reply Hazy, try again", "Don't count on it", "It's decidedly so", "Most likely", "Ask again later", "My reply is no", "Without a doubt", "Outlook good", "Better not tell you now", "My sources say no", "Yes - definitely", "Yes", "Cannot predict now", "Outlook not so good", "You may rely on it", "Signs point to yes", "Concentrate and ask again", "Very doubtful"]
const answerFunc=(question)=>{
const rand=Math.floor(Math.random()*words.length)

const answer=words[rand]
console.log("question: "+question)
console.log("answer: "+answer)
}

answerFunc("will you be available tomorrow?")

//Assignment 2-array of multiples

const arrayOfMultiples=(num,length)=>{
let arr=[]
for (i=num;i<=(length*num);i+=num){
arr.push(i)
}
console.log(arr)
}

arrayOfMultiples(7,5)


//Assignment 3-Fabonacci
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

Fabonacci(12)
