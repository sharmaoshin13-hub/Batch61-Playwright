// Step 1: Calculate interest asynchronously
function calculateInterest(customerName, principal, rate) {
  return new Promise((resolve) => {
    console.log(`Processing interest for ${customerName}...`);
    setTimeout(() => {
      const interest = (principal * rate) / 100;
      const balance = principal + interest;
      console.log(`Interest credited: ₹${interest.toFixed(2)}. New Balance: ₹${balance.toFixed(2)}`);
      resolve(balance);
    }, 3000); // simulate 3 seconds delay
  });
}

// Step 2: Request account closure
function requestClosure(balance) {
  return new Promise((resolve, reject) => {
    console.log("Processing account closure request...");
    setTimeout(() => {
      if (balance > 1000) {
        resolve(`Account closed successfully. Final Balance: ₹${balance.toFixed(2)}`);
      } else {
        reject(`Closure denied. Balance ₹${balance.toFixed(2)} is too low to close.`);
      }
    }, 2000);
  });
}

// Example usage
const customerName = "Oshin";
const principal = 950;
const rate = 10; // annual interest rate %

calculateInterest(customerName, principal, rate)
  .then((balance) => requestClosure(balance))
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
