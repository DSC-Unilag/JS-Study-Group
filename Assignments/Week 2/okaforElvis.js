var score = prompt('Enter a Score : ');

if (score <= 39) {
	console.log('Grade : F');
} else if (score <= 44) {
	console.log('Grade : E');
} else if (score <= 49) {
	console.log('Grade : D');
} else if (score <= 59) {
	console.log('Grade : C');
} else if (score <= 69) {
	console.log('Grade : B');
} else if (score <= 100) {
	console.log('Grade : A');
} else {
	console.log('Invalid input');
}

function pH(x) {
	if (x <= 14 && x > 7) {
		return 'Alkaline';
	} else if (x >= 0 && x < 7) {
		return 'Acidic';
	} else if (x >= 0 && x === 7) {
		return 'Neutral';
	} else {
		return 'Invalid';
	}
}
