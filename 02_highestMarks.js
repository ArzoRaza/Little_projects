// Array of marks scored by five students
const marks = [85, 92, 78, 95, 88];

// Initialize highest score and its index
let highestScore = marks[0];
let highestScoreIndex = 0;

// Iterate through the array using a for loop
for (let i = 1; i < marks.length; i++) {
  // Use a ternary operator to check if the current score is higher than the highest score
  marks[i] > highestScore ? (highestScore = marks[i], highestScoreIndex = i) : null;
}

// Display the highest score and the index of the student who scored it
console.log(`The highest score is ${highestScore} and was scored by student ${highestScoreIndex + 1}.`);