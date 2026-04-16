<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
const ar = [10, 20, 5, 17, 45, 12];

// Method 1: Using Math.max and Math.min with spread operator
const maximum = Math.max(...ar);
const minimum = Math.min(...ar);

console.log("Maximum:", maximum); // 45
console.log("Minimum:", minimum); // 5

// Method 2: Using loop (manual approach)
let max = ar[0];
let min = ar[0];

for (let i = 1; i < ar.length; i++) {
  if (ar[i] > max) {
    max = ar[i];
  }
  if (ar[i] < min) {
    min = ar[i];
  }
}

console.log("Maximum (loop):", max); // 45
console.log("Minimum (loop):", min); // 5
