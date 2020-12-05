function isPrime(n){
    if(n == 1){
        return false;
    }else if(n == 2){
        return true;
    }else{
        for (var i = 2; i < n; i++){
            if(n % i == 0){
                return false;
            }
        }
        return true;
    }
}
isPrime(17)