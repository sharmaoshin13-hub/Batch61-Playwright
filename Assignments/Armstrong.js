function isArmstrong(inputNumber) {
  let originalNumber = inputNumber;   // Keep the original number
  let sum = 0;

  // Loop through each digit
  while (inputNumber > 0) {
    let digit = inputNumber % 10;     // Get last digit
    sum += digit * digit * digit;     // Add cube of digit
    inputNumber = Math.floor(inputNumber / 10); // Remove last digit
  }

  // Compare sum of cubes with original number
  return sum === originalNumber;
}

// Test cases
console.log(isArmstrong(371)); // true
console.log(isArmstrong(407)); // true
console.log(isArmstrong(150)); // false
console.log(isArmstrong(153)); // true
console.log(isArmstrong(0));   // true
console.log(isArmstrong(1));   // true
<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
