/************Grade Interpreter ************/
let grade = 90;
let startingSentence = "Your grade is";

switch (true) {
    case (grade <= 39):
        console.log(`${startingSentence} F`);
        break;
    case ((grade <= 44) && (grade >= 40)):
        console.log(`${startingSentence} E`);
        break;
    case ((grade <= 49) && (grade >= 45)):
        console.log(`${startingSentence} D`);
        break;
    case ((grade <= 59) && (grade >= 50)):
        console.log(`${startingSentence} C`);
        break;
    case ((grade <= 69) && (grade >= 60)):
        console.log(`${startingSentence} B`);
        break;
    case ((grade <= 100) && (grade >= 70)):
        console.log(`${startingSentence} A`);
        break;
    default:
        console.log("Invalid grade");
}

/************ PH Scale ************/
let phValue = 14;
switch(true) {
    case (phValue === 7):
        console.log('Neutral');
        break;
    case ((phValue < 7) && (phValue >= 0)):
        console.log('Acidic');
        break;
    case ((phValue > 7) && (phValue <= 14)):
        console.log('Alkaline');
        break;
    default:
        console.log('Invalid');
}