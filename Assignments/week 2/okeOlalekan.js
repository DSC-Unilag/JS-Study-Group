function gradeCalculator (grade) {
    if (grade <= 100 && grade >= 70){
        return console.log("Your grade is A");
    } else if (grade <= 69 && grade >= 60) {
        return console.log("Your grade is B");
    }else if (grade <= 59 && grade >= 50) {
        return console.log("Your grade is C");
    }else if (grade <= 49 && grade >= 45) {
        return console.log("Your grade is D");
    }else if (grade <= 44 && grade >= 40) {
        return console.log("Your grade is E");
    }else if (grade <= 39 && grade >= 0) {
        return console.log("Your grade is F");
    }else {
        return console.log("You have a entered an invalid value")
    }
}   

// 2) PH Scale

function phCalculator (pH) {
    if (pH === 7) {
        return console.log("Neutral");
    }else if (pH < 7 && pH > 0) {
        return console.log("Acidic");
    }else if (pH > 7 && pH <= 14) {
        return console.log("Basic");
    }else {
        return console.log("Invalid");
    }
}
