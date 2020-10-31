<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <script>
function isPrime(num) { 
	if (num === 2) {	return true; }
			else if (num > 1) { for (var i = 2; i < num; i++) { if (num % i !== 0) { return true; }
	   else if (num === i * i) { return false }
			else { return false; } } } 
	  else { return false; } }
								   								    console.log(isPrime(12));


    </script>
</body>
</html>
