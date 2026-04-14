// Import readline module for user input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers (space-separated):\n", function(input) {
  // Trim and split input
  let parts = input.trim().split(/\s+/);

  // Handle empty input
  if (parts.length === 1 && parts[0] === "") {
    console.log("Invalid Input: Empty Input");
    rl.close();
    return;
  }

  // Convert to numbers
  let numbers = parts.map(num => Number(num));

  // Validate input (check for NaN)
  if (numbers.some(isNaN)) {
    console.log("Invalid Input");
  } else {
    // Sort in ascending order
    numbers.sort((a, b) => a - b);

    // Display result
    console.log("Sorted Array:");
    console.log(numbers.join(" "));
  }

  rl.close();
});
