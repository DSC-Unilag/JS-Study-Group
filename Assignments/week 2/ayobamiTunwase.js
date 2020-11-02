/**
 * Returns a string representing a person's grade
 * 
 * @param {number} grade Grade of a person
 */
const interpreteGrade = (grade) => {
    if (grade < 0 || grade > 100) {
        return 'invalid';
    } else if (grade >= 70) {
        return 'A';
    } else if (grade >= 60) {
        return 'B';
    } else if (grade >= 50) {
        return 'C';
    } else if (grade >= 45) {
        return 'D';
    } else if (grade >= 40) {
        return 'E';
    } else {
        return 'F';
    }
}
console.log(interpreteGrade(69));

/**
 * Returns a string representing the pH value
 * 
 * @param {number} phValue The pH value
 */
const phScale = (phValue) => {
    if (phValue < 0 || phValue > 14) {
        return 'invalid';
    } else if (phValue < 7) {
        return 'acidic';
    } else if (phValue === 7) {
        return 'neutral';
    } else {
        return 'alkaline';
    }
}
console.log(phScale(0));