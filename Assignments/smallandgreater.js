function smallestAndLargest(num) {
  // Convert number to string and split into digits
  let digits = String(num).split("");

  // Sort digits in ascending order
  let smallest = digits.slice().sort().join("");

  // Sort digits in descending order
  let largest = digits.slice().sort((a, b) => b - a).join("");

  return {
    smallest: smallest,
    largest: largest
  };
}

// Example usage
let inputNumber = 3716;
let result = smallestAndLargest(inputNumber);

console.log("Input Number:", inputNumber);
console.log("Smallest Number:", result.smallest);
console.log("Largest Number:", result.largest);

