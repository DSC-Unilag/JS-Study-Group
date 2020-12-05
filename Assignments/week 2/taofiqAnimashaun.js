// PH Scale
phValue = prompt("Enter PH Value...");
if (phValue < 0 || phValue > 14){
	console.log("Invalid");
} else if (phValue < 7){
	console.log("Acidic");
} else if (phValue == 7){
 	console.log("Neutral");
} else if (phValue > 7){
	console.log("Alkaline");
}

// Grade Interpreter
grade = prompt("Enter Score...");
if (grade >= 70){
	console.log("A");
} else if(grade >= 60 && grade <= 69){
	console.log("B");
}else if(grade >= 50 && grade <= 59){
	console.log("C");
}else if(grade >= 45 && grade <= 49){
	console.log("D");
}else if(grade >= 40 && grade <= 44){
	console.log("E");
}else if(grade <= 39){
	console.log("F");
}
