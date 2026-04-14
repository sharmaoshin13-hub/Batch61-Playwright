const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of rows: ", function(rows) {
  rows = parseInt(rows, 10);

  for (let i = rows; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(65 + j - 1) + " ";
    }
    console.log(pattern);
  }

  rl.close();
});
//Change the inner loop to print j instead of *.
//change the inner loop to pattern += String.fromCharCode(65 + j - 1) + " ";
//pattern += "* ";