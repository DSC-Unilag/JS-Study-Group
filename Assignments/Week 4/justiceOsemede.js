checkPrime = function(prime){

    if(prime === 1){
        return ('false');
    }

    if (prime === 2 ){
        return('true');
    }

    else
    {
        for(i = 2; i < prime; i++)
        {
            if(prime % i !== 0){
                return('true');
            
            }

            else{
                return('false');
            }
        }
        
    }
   

}