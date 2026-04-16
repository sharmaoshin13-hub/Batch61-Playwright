function reverseNumber(num) {
  // Convert number to string, split into characters, reverse, and join back
  let reversedStr = String(num).split("").reverse().join("");

  // Convert back to number
  return Number(reversedStr);
}

// Test cases
console.log(reverseNumber(15));     // 51
console.log(reverseNumber(135));    // 531
console.log(reverseNumber(12721));  // 12721
<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
