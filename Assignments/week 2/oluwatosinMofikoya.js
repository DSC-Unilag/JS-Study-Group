 var grade = window.prompt("Enter your score to get your grade")

 if (grade >= 70 && grade <= 100){
     console.log("You got an A")
 }else if (grade >=60 && grade <= 69){
     console.log("You got a B")

 }else if (grade >=50 && grade <=59){
     console.log("You got a C")
 }else if(grade >=45 && grade <=49){
     console.log("You got a D")
 }else if(grade >= 40 && grade <= 44){
     console.log("You got an E")
 }else if (grade <= 39){
     console.log("You got an 5")
 }else{
     console.log("Error, Try again")
 }


 var PH = window.prompt("Enter the PH value")

 if(PH > 7){
    console.log("Alkaline");
 }else if(PH < 7){
     console.log("Acidic");
 }else if(PH < 0 || PH > 14){
     console.log("Invalid");
 }