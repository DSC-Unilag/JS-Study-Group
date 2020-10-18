// 1. Grade interpreter
let score = 69;

if(score >= 70){
    console.log("A");
}else if(score <= 69 && score >= 60){
    console.log("B");
}else if(score <= 59 && score >= 50){
    console.log("C");
}else if(score <= 49 && score >= 45){
    console.log("D");
}else if(score <= 44 && score >= 40){
    console.log("E");
}else{
    console.log("F");
}

// 2. PH Scale
let PhValue = 6;

if(PhValue > 7 && PhValue <= 14){
    console.log("Alkaline");
}else if(PhValue < 7 && PhValue >= 0){
    console.log("Acidic");
}else if(PhValue === 7){
    console.log("Neutral");
}else{
    console.log("Invalid");
}