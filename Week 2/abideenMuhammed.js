// grade interpreter
const grade = prompt("Enter your score");
if (grade >= 70){
    console.log(`Your score is ${grade} and your grade is A`)
}else if (grade <=69 && grade >=60){
    console.log(`Your grade is ${grade} and your grade is B`)
} else if (grade <=59 && grade >=50){
    console.log(`Your grade is ${grade} and your grade is C`)
} else if (grade <=49 && grade >=45){
    console.log(`Your grade is ${grade} and your grade is D`)
}else if (grade <=44 && grade >=40){
    console.log(`Your grade is ${grade} and your grade is E`)
}

else {
    console.log(`Your grade is ${grade} and your grade is F`)
}


// PH Scale
const ph_scale = prompt("Enter your ph value:");


if (ph_scale > 8 && ph_scale <=14 ){
    console.log("Your ph scale is alkaline")
}else if (ph_scale < 7 || ph_scale <= 0){
    console.log(`Your ph_scale is acidic`)
} else if (ph_scale == 7){
    console.log("Your ph_scale is neutral")
} else {
    console.log("Your  ph_scale is invalid")
};