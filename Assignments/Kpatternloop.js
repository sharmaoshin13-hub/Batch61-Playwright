<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
function printHourglass(n, charType = "*") {
  // Helper function to get character
  function getChar(i) {
    if (charType === "*") return "*";
    if (charType === "number") return String(i);
    if (charType === "alphabet") return String.fromCharCode(65 + (i - 1)); // A=65
  }

  // Top half (descending)
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += getChar(i) + " ";
    }
    console.log(row.trim());
  }

  // Bottom half (ascending)
  for (let i = 2; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += getChar(i) + " ";
    }
    console.log(row.trim());
  }
}

// Example usage
console.log("Hourglass with Stars:");
printHourglass(5, "*");

console.log("\nHourglass with Numbers:");
printHourglass(5, "number");

console.log("\nHourglass with Alphabets:");
printHourglass(5, "alphabet");
