<<<<<<< HEAD
function hollowBlockStars(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

hollowBlockStars(5);

function hollowBlockNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += i + " "; // row number
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

hollowBlockNumbers(5);
=======
>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297

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
<<<<<<< HEAD


=======
>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
