// Lists to store results
let divisibleBy3 = [];
let divisibleBy5 = [];
let divisibleByBoth = [];

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    divisibleByBoth.push(i);   // divisible by both 3 and 5
  } else if (i % 3 === 0) {
    divisibleBy3.push(i);      // divisible by 3 only
  } else if (i % 5 === 0) {
    divisibleBy5.push(i);      // divisible by 5 only
  }
}

// Display results
console.log("Numbers divisible by 3:");
console.log(divisibleBy3);

console.log("\nNumbers divisible by 5:");
console.log(divisibleBy5);

console.log("\nNumbers divisible by both 3 and 5:");
console.log(divisibleByBoth);
<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
