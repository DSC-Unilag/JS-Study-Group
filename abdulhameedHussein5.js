<!DOCTYPE html>
<html lang="en">
<head>
	<title>Page title</title>
</head>
<body>
<script>
	function multiples(num,length) {
			var array = [];
		for (let i=0; i<=length; i++) {

			array[i] = num * (i + 1);
	
	}
		console.log(array) ;
		document.write(array);
	}
	multiples(2,6);
	
	//new assignment
	
	var answer = Math.ceil(Math.random()*20);
 switch (answer) {
	case 1: document.write("it is certain.");
	break; 
	case 2: document.write(" As I see it, yes.");
	break; 
	case 3: document.write("it is decidedly so.");
	break; 
	case 4: document.write("without a doubt.")
	break;
	case 5: document.write("yes-defintely.");
	break; 
	case 6: document.write("you may rely on it.");
	break; 
	case 7: document.write("most likely.");
	break; 
	case 8: document.write("outlook good.");
	break; 
	case 9: document.write("yes.");
	break; 
	case 10: document.write("Signs point to yes.");
	break; 
	case 11: document.write("Reply hazy, tru again.");
	break; 
	case 12: document.write("Ask again later.");
	break; 
	case 13: document.write("Better not tell you now.");
	break; 
	case 14: document.write("cannot predict now.");
	break; 
	case 15: document.write("outlook, not so good.");
	break; 
	case 16: document.write("concentrate and ask again.");
	break; 
	case 17: document.write("dont count on it.");
	break; 
	case 18: document.write("my reply is No.");
	break; 
	case 19: document.write("my sources say No.");
	break; 
	case 20: document.write("very doubtful.");
	break; 
	default: document.write("try choosing another number");
	           } 
	                         
//new assignment


const number = parseInt(prompt('Enter the number of terms: ')); let n1 = 0, n2 = 1, nextTerm; console.log('Fibonacci Series:'); for (let i = 1; i <= number; i++) { console.log(n1); nextTerm = n1 + n2; n1 = n2; n2 = nextTerm; }
</script>
</body>
</html>
