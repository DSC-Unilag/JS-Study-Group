//GRADE INTERPRETER//

let score = 27;
let grade;

if (score >= 70) {
  grade = "A";
}

if (score <= 69 && score >= 60) {
  grade = "B";
}

if (score <= 59 && score >= 50) {
  grade = "C";
}

if (score <= 49 && score >= 45) {
  grade = "D";
}

if (score <= 44 && score >= 40) {
  grade = "E";
}

if (score <= 39) {
  grade = "F";
}
console.log(grade);

// * 2nd Assignment *//
//PH SCALE//

let phValue = 6;
let ph;

if (phValue <= 14 && phValue > 7) {
  ph = "alkaline";
}

if (phValue === 7) {
  ph = "neutral";
}

if (phValue <= 6 && phValue > 1) {
  ph = "acidic";
}

if (phValue > 14 && phValue < 0) {
  ph = "invalid";
}

console.log(ph);
