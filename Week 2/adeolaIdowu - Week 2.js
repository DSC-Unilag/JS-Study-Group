// Question 1
let score = prompt("Enter Your Score: ");
let grade;

if(score <= 100 && score >= 70) {
	grade = "A";
	console.log(grade)
} else if (score <= 69 && score >=60) {
	grade = "B";
	console.log(grade)
} else if (score <= 59 && score >= 50) {
	grade = "C";
	console.log(grade)
} else if (score <= 49 && score >= 45) {
	grade = "D";
	console.log(grade)
} else if (score <= 44 && score >= 40) {
	grade = "E";
	console.log(grade)
} else if (score <= 39) {
	grade = "F";
	console.log(grade)
} else {
	grade = null;
	console.log("Please enter a valid number")
}


// Question 2
let phValue = prompt("Enter a ph Value")
let output;

if(phValue <= 14 && phValue > 7) {
	output = "Alkaline";
	console.log(output)
} else if (phValue < 7 && phValue >= 0) {
	output = "Acidic";
	console.log(output)
} else if (phValue = 7) {
	output = "Neutral";
	console.log(output)
} else {
	output = null;
	console.log("Invalid. Please enter a valid ph value")
}
	
	
	
	
	
	
	

