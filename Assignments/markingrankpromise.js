// Step 1: Create getData() that returns a Promise
function getData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching exam result...");

    // Step 2: Generate random number between 40 and 100
    const marks = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
    console.log(`Marks obtained: ${marks}`);

    // Step 3 & 4: Check pass/fail condition
    if (marks < 60) {
      reject("You have failed");
    } else {
      resolve("You have passed this exam");
    }
  });
}

// Example usage
getData()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

