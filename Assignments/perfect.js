function isPerfectNumber(input) {
    // Try to convert input to a number
    let number = Number(input);

    // Handle invalid inputs (like "abc")
    if (isNaN(number)) return false;

    // Negative numbers cannot be perfect
    if (number < 0) return false;

    // Check if it's an integer (28.5 should return false)
    if (!Number.isInteger(number)) return false;

    // 0 and 1 are not perfect numbers
    if (number < 2) return false;

    // Find sum of proper divisors
    let sum = 1; // 1 is always a divisor
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}

// ✅ Test Cases
console.log(isPerfectNumber(6));      // true
console.log(isPerfectNumber(28));     // true
console.log(isPerfectNumber(28.0));   // true
console.log(isPerfectNumber(-28));    // false
console.log(isPerfectNumber("abc"));  // false
console.log(isPerfectNumber(12));     // false
