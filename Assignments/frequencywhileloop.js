<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
function findDigitFrequency(number, digit) {
  // Convert number to string for easy iteration
  const numStr = number.toString();
  let count = 0;

  for (let i = 0; i < numStr.length; i++) {
    if (parseInt(numStr[i]) === digit) {
      count++;
    }
  }

  return count;
}

// Example usage
const number = 17382117;
const digit = 7;

const frequency = findDigitFrequency(number, digit);
console.log(`Frequency of digit ${digit} in ${number} is: ${frequency}`);
