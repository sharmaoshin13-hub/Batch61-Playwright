
// Step 1: Place Order
function placeOrder(foodName, callback) {
  console.log(`Order placed for ${foodName}. Preparing...`);

  // Simulate 2 seconds delay for preparation
  setTimeout(() => {
    console.log(`${foodName} is prepared.`);
    callback(foodName); // Call the next step (deliverOrder)
  }, 2000);
}

// Step 2: Deliver Order
function deliverOrder(foodName) {
  console.log(`Delivering ${foodName}...`);

  // Simulate 2 seconds delay for delivery
  setTimeout(() => {
    console.log(`${foodName} has been delivered!`);
  }, 2000);
}

// Example usage
placeOrder("Pizza", deliverOrder);
