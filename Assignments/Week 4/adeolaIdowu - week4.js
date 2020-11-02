function isPrimeNumber(number) {
	if (number === 1) {
	  return number + " isn't a prime number";
	} else if (number === 2) {
	  return number + " is a prime number";
	} else {
	  for (var x = 2; x < number; x++) {
		if (number % x === 0) {
		  return number + " isn't a prime number";
		}
	  }
	  return number + " is a prime number";
	}
  }
  
  console.log(isPrimeNumber(11));
  