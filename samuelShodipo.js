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
   
   console.log(PH_value);
   console.log(scale);
   
   
    // Week 3 Assignment
   
    function squaresSum(n) {
      let arr = [];
   
   var num = 1;
     for(let i = 0; i < 2; i++){
       num = num * n ;
     
    arr.push(num)
    //console.log(num);
     }
     
    let reducedArr = arr.reduce((a, b) =>{return a + b})
     console.log(reducedArr);
     // document.write(reducedArr);
      
      
    }
    
    squaresSum(2);
    
    function sumUp(n) {
      let c = 1;
      let d;
      let arr = [];
      for (c; c <= n; c++) {
        d = c ** 2
        arr.push(d)
        //console.log(d)
      }
      let reducedArr = arr.reduce((a, b) => { return a + b })
     // console.log(reducedArr)
    }
    sumUp(2)
    
    
    
    // Assignment 4 
    function prime_num(n){
      
      let d;
      
      
        d = n % 2 
        console.log(d)
        
        
      if (n % 2  && n % 3) {
        console.log(`${" A Prime Number"}`);
      } else 
       { console.log(`${"Not A Prime Number"}`);}
      }
    
    
    prime_num(13)
    