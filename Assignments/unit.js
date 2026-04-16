function inchesToMeters(input) {
    // Try to convert input to a number
    let inches = Number(input);

    // Handle invalid inputs (like "abc", "@#$", "1xy")
    if (isNaN(inches)) {
        return "Invalid output";
    }

    // Conversion: 1 inch = 0.0254 meters
    let meters = inches * 0.0254;

    // Format result to exactly 2 decimal places
    return meters.toFixed(2);
}

// ✅ Test Cases
console.log(inchesToMeters(10.00));   // 0.25
console.log(inchesToMeters(-10.00));  // -0.25
console.log(inchesToMeters("abc"));   // Invalid output
console.log(inchesToMeters(-1000));   // -25.40
console.log(inchesToMeters("1xy"));   // Invalid output
console.log(inchesToMeters("@#$"));   // Invalid output
