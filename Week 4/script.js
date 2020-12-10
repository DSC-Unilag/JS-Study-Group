function primeNumber(check){
    if(check === 1){
        return false;
    }else if(check === 2){
        return true;
    }
    else{
        for( let i = 2; i < check; i++){
            let divide = check % i;
            console.log(divide);
            if(divide === 0){
                return "this is not a prime number";
            }
        }
            return "this is a prime number";
    }
    
}
primeNumber(9);