// Take input from the user
const num = parseInt(prompt("Enter a number: "), 10);

// Function to check prime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Output in required format
if (isPrime(num)) {
  console.log(`provided number ${num} is prime`);
} else {
  console.log(`provided number ${num} is not-prime`);
}
