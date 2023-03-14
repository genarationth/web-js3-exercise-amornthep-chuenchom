console.log("Ex 1");
const transaction = 5;
const calCost = (transaction) =>
  transaction + transaction * 0.03 + transaction * 0.01;
console.log(calCost(transaction));
console.log("----------------------------------------");

console.log("Ex 2");
const greeting = (name1, name2, name3) =>
  console.log(`Welcome ${name1}, ${name2}, ${name3}`);
const calAge = (birthYear) => new Date().getFullYear() - birthYear;
const greetingAndAge = (
  name1,
  birthYear1,
  name2,
  birthYear2,
  name3,
  birthYear3
) =>
  console.log(
    `Welcome ${name1}, you are ${calAge(
      birthYear1
    )}. Welcome ${name2}, you are ${calAge(
      birthYear2
    )}. Welcome ${name3} you are ${calAge(birthYear3)}.`
  );

console.log(greeting("Kenny", "Eric", "Butters"));
console.log(calAge(1995));
console.log(greetingAndAge("Kenny", 1994, "Eric", 1995, "Butters", 1996));

console.log("----------------------------------------");

console.log("Challenge Yourself");

const grading = (score) => {
  if (score === 11) {
    console.log("Perfect");
    return true;
  } else if (score > 8) {
    console.log("Excellent");
    return true;
  } else if (score >= 5) {
    console.log("Pass");
    return true;
  } else {
    console.log("Fail");
    return false;
  }
};

grading(0);
grading(5);
grading(9);
grading(11);
