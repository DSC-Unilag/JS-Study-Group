// part 1
const grader = (grade) => {
  if (grade > 69) return "A";
  if (grade > 59) return "B";
  if (grade > 49) return "C";
  if (grade > 44) return "D";
  if (grade > 39) return "E";
  return "F";
};
grader(100);

const phScale = (n) => {
  if (n > 14 || n < 0) return "Invalid";
  if (n > 7) return "Alkaline";
  if (n < 7) return "Acidic";
  return "Neutral";
};
phScale(2.5);
