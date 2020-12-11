function isPrimeNumber(num){
for(let i=2; i < num.length; i++)
if(num % i ===0) return false;
return num >1

}
console.log(isPrimeNumber(9))
