
function blockedXPattern(n) {
  const size = 2 * n - 1; // total columns
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {
      // Border condition OR diagonals
      if (
        i === 1 || i === size || j === 1 || j === size || 
        i === j || j === size - i + 1
      ) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

// Example usage
blockedXPattern(5);

function blockedXPatternNumbers(n) {
  const size = 2 * n - 1;
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {
      if (
        i === 1 || i === size || j === 1 || j === size || 
        i === j || j === size - i + 1
      ) {
        row += i + " "; // print row number
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

blockedXPatternNumbers(5);

function blockedXPatternAlphabets(n) {
  const size = 2 * n - 1;
  for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= size; j++) {
      if (
        i === 1 || i === size || j === 1 || j === size || 
        i === j || j === size - i + 1
      ) {
        row += String.fromCharCode(65 + i - 1) + " "; // A=65
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

blockedXPatternAlphabets(5);

