// QUESTION 1
// STUDENT SCORE
var studentScore = 150;
if(studentScore == null || studentScore > 100
    )
{
    console.log("invalid")
}
else if (studentScore >= 70){
    console.log ("A")
}
else if (studentScore < 70 && studentScore >= 60){
    console.log ("B")
}
else if (studentScore < 60 && studentScore >= 50){
    console.log ("C")
}
else if (studentScore < 50 && studentScore >= 45){
    console.log ("D")
}
else if (studentScore < 45 && studentScore >= 40){
    console.log ("E")
}
else {
    console.log("F")
}
// QUESTION 2
// PH SCALE
var pHScale = -1;
if(pHScale == null || pHScale < 0 || pHScale > 14){
    console.log("invalid")
}

else if(pHScale > 7){
    console.log("acidic")
}
else if(pHScale == 7){
    console.log("neutral")
}
else{
    console.log("alkaline")
}