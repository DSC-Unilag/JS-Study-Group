console.log('FIBONACCI SEQUENCE');

const number = parseInt(prompt('Enter your termination number', '0'));

let n1 = 0,
    n2 = 1,
    n;
console.log(n1);
console.log(n2);
n = n1 + n2;

while (n <= number) {
    console.log(n);
    n1 = n2;
    n2 = n;
    n = n1 + n2;
}