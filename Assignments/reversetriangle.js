<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
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
<<<<<<< HEAD
//Change the inner loop to print j instead of *.
//change the inner loop to pattern += String.fromCharCode(65 + j - 1) + " ";
//pattern += "* ";
=======
//reverse with number -Change the inner loop to print j instead of *.
//reverse with aplphabets- change the inner loop to pattern += String.fromCharCode(65 + j - 1) + " ";
//reverse with * -pattern += "* ";
>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
