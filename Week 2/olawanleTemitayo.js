var gradeScore = 40;

if(gradeScore >= 70 && gradeScore <= 100){
	console.log("A");
}else if(gradeScore >= 60 && gradeScore <= 69){
	console.log("B");
}else if(gradeScore >= 50 && gradeScore <= 59){
	console.log("C");
	}else if(gradeScore >= 45 && gradeScore <= 49){
	console.log("D");
	}else if(gradeScore >= 40 && gradeScore <= 44){
	console.log("E");
	}else{
		console.log("F")
	}
	
//pH Scale
let pH = 7;

if (pH < 7){
	console.log("Acidic");
}else if(pH > 7){
	console.log("Alkaline");
}else if(pH === 7){
	consolr.log("Neutral")
}