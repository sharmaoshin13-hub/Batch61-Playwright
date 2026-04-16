<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
// Step 1: Create an array
const arr = [10, 20, 30, 40, 50];

// Step 2: Iterate in reverse, skipping odd indices
for (let i = arr.length - 1; i >= 0; i--) {
  if (i % 2 === 0) { // only even indices
    console.log(arr[i]);
  }
}
