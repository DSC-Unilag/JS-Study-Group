//Grade interpreter
function grade() {
    let score = 55;
    if (score >= 70) {
        console.log('A')
    } else if (score >= 60) {
        console.log('B');
    } else if (score >= 50) {
        console.log('C');
    } else if (score >= 45) {
        console.log('D');
    } else if (score >= 40) {
        console.log('E');
    } else {
        console.log('F')
    }
}
grade();

//PH Scale

function scalePH() {
    let measure = 1;
    if (measure < 7 && measure === 14) {
        console.log('alkaline');
    } else if (measure === 7) {
        console.log('neutral');
    } else if (measure < 7) {
        console.log('acidic');
    } else {
        console.log('invalid value');
    }

}
scalePH()