function printDiamond(n, charType = "*") {
  // Function to get the character for a given position
  function getChar(index) {
    if (charType === "*") return "*";
    if (charType === "number") return String(index);
    if (charType === "alphabet") return String.fromCharCode(65 + (index - 1)); // A=65
  }

  // Upper pyramid
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let chars = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
      chars += getChar(i) + " ";
    }
    console.log(spaces + chars.trim());
  }

  // Lower inverted pyramid
  for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let chars = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
      chars += getChar(i) + " ";
    }
    console.log(spaces + chars.trim());
  }
}

// Example usage
console.log("Diamond with Stars:");
printDiamond(5, "*");

console.log("\nDiamond with Numbers:");
printDiamond(5, "number");

console.log("\nDiamond with Alphabets:");
printDiamond(5, "alphabet");
