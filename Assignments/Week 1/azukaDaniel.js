//Declare variables
const celsius = 37;

//Converting function
const convertingFunc = (x) => {
   const y = (x * (9/5)) + 32
   const farenheit = Math.round(y);
    console.log(farenheit);

}
//Declare function
convertingFunc(celsius);