function primeNum(num) {
	let i;
	let x = 0;
	let arr = [];
	//Pushing the values of x of each iteration into an array
	for (i = 1; i < num; i++) {
		if (num % i > 0) {
			x = 1;
			arr.push(x)
		} else {
			x = 0;
			arr.push(x)
		}
	}
	//Summing the values in the array
	let sum = arr.reduce((a, b) => {
		return a + b;
	})
	//Using the argument to deduct if it's a prime number'
  if (sum == (num - 2)) {
  	  console.log(`${num} is a prime number`);
  } else {
  	  console.log(`${num} is not a prime number`);
  }
};
primeNum(4)