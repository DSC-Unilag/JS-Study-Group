// 1 GRADE INTERPRETER

let allotGrade = (grade) => {
    if(grade >= 70 && grade <= 100) {
        console.log(`you got ${grade}, so you get an A`);
    } else if(grade >= 60 && grade <= 69) {
        console.log(`you got ${grade}, so you get a B`);
    } else if(grade >= 50 && grade <= 59) {
        console.log(`you got ${grade}, so you get a C`);
    }  else if(grade >= 45 && grade <= 49) {
        console.log(`you got ${grade}, so you get a D`);
    }  else if(grade >= 40 && grade <= 44) {
        console.log(`you got ${grade}, so you get a E`);
    }  else if(grade >= 0 && grade <= 39) {
        console.log(`you got ${grade}, so you get a F`);
    } else {
        console.log(`you got ${grade}. Oops, I don't have a grade for you :(`);
    }
}
//allotGrade(grade);

// 2. PH SCALE
let PHlevel = (PHval) => {
    if(PHval > 7 && grade <= 14) {
        console.log("Alkaline");
    } else if(PHval === 7) {
        console.log("Neutral");
    } else if(PHval >= 1 && PHval < 7) {
        console.log("Acidic");
    } else {
        console.log("invalid PH level");
    }
}
//allotGrade(PHval);