
function hollowBlockAlphabets(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += String.fromCharCode(65 + i - 1) + " "; // A=65
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

hollowBlockAlphabets(5);
