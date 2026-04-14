function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    // Print spaces
    let spaces = " ".repeat(n - i);

    // Print stars
    let stars = "*".repeat(2 * i - 1);

    // Combine and print each row
    console.log(spaces + stars);
  }
}

// Example usage
printPyramid(5);


function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let numbers = "";
    for (let j = 1; j <= i; j++) {
      numbers += j + " ";
    }
    console.log(spaces + numbers.trim());
  }
}

// Example: n = 5
numberPyramid(5);

function alphabetPyramid(n) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let letters = "";
    for (let j = 0; j < i; j++) {
      letters += alphabet[j] + " ";
    }
    console.log(spaces + letters.trim());
  }
}

// Example: n = 5
alphabetPyramid(5);
