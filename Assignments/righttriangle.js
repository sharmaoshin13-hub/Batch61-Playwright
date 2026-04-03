const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of rows: ", function(rows) {
  rows = parseInt(rows, 10);

  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += pattern += String.fromCharCode(65 + j - 1) + " ";
    }
    console.log(pattern);
  }

  rl.close();
});

//output = 5
//right triangle *
//right triangle number- Change the inner loop to print j instead of *.
//right triangle alphabet- pattern += String.fromCharCode(65 + j - 1) + " ";
