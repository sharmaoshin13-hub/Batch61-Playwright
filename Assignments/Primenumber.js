// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // prime numbers are greater than 1
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // divisible by another number
  }
  return true;
}

// Print all prime numbers between 1 and 100
console.log("Prime Numbers between 1 and 100:");

let primes = [];
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    primes.push(i); // add prime to the list
  }
}

// Display primes as a comma-separated list
console.log(primes.join(", "));
<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
