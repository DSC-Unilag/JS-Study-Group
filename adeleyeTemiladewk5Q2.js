console.log('Lets create some number lists');

let num, length;
num = prompt('Enter your number');
length = prompt('Enter your array length');


function arrayOfMultiples(num, length) {
    for (let i = 0; i <= length; i++) {
        var arrayy = [];
        arrayy[i] = num * (i + 1);

    }
    console.log(arrayy);
}