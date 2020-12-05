checkPrime = function(number){

    

    if(number <= 1){
        return `${number} is not a prime number`;
    }

    if (number === 2 ){
        return `${number} is a prime number`;
    }

    else
    {
        for(i = 2; i < number; i++)
        {
            if(number % i == 0){
                return `${number} is not a prime number`;
            
            }
            else{
                return `${number} is a prime number`;
            } 

        }

      


        
    }

   
            
}

//checkPrime(number);
   

