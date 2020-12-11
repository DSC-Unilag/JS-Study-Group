function prime(num) {
    if (num===1)
    {
      return false;
    }
    else if(num === 2)
    {
      return true;
    }else
    {
      for(var x = 2; x < num; x++)
      {
        if(num % x === 0)
        {
          return false;
        }
      }
      return true;  
    }
}
console.log(prime(15))