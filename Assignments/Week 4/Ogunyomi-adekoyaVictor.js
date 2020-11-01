function isprime(x){
    if(x=== 2){
        console.log(` ${x} is a prime number`);
    }else if(x > 2 && x % 2 !== 0  ){
        console.log(`${x} is a prime number`);
    }else{
        console.log(`${x} is not a prime number`);
    }

}
isprime(3);
