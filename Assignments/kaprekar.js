function kaprekarSteps(num) {
    let count = 0;

    // Pad with leading zeros to ensure 4 digits
    let current = num.toString().padStart(4, '0');

    // Loop until we reach 6174
    while (current !== "6174") {
        // Split digits
        let digits = current.split('');

        // Arrange digits descending and ascending
        let desc = digits.slice().sort((a, b) => b - a).join('');
        let asc = digits.slice().sort((a, b) => a - b).join('');

        // Subtract smaller from larger
        let result = (parseInt(desc) - parseInt(asc)).toString().padStart(4, '0');

        // Update current number
        current = result;
        count++;

        // Safety break: if all digits are same (e.g., 1111), it will never reach 6174
        if (count > 10) break;
    }

    return count;
}

// Example runs:
console.log("1459", kaprekarSteps(1459), "steps"); // 3
console.log("8082", kaprekarSteps(8082), "steps"); // 2
console.log("8532", kaprekarSteps(8532), "steps"); // 1
