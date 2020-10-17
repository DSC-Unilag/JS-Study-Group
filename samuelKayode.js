// Assignment 1

let score, grade;

score = 69;
score = 90;


  if (score >= 70) {
    grade = `${"Your grade is A"}` ;
  } else if (score >= 60) {
    grade = `${"Your grade is B"}`;
  } else if (score >= 50) {
    grade =  `${"Your grade is C"}`;
  } else if (score >= 45) {
    grade =  `${"Your grade is D"}`;
  } else if (score >= 40) {
    grade =  `${"Your grade is E"}`;
  } else
    {grade = `${"Your grade is F"}`};
    
    console.log(score);
 console.log(grade);
 







//Assignment 2 

let PH_value, scale;
 
 PH_value = 7;

if (PH_value > 7 && PH_value < 15) {
  scale = `${"alkaline"}`;
} else if (PH_value < 7 && PH_value > 0){
  scale = `${"acidic"}`;
} else if (PH_value == 7){
  scale = `${"neutral"}`;
} else 
{scale = `${"invalid"}`}
   
   
   console.log(scale);