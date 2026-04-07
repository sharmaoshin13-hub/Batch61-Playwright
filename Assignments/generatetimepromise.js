// Step 1: Generate OTP (Promise)
function generateOTP() {
  return new Promise((resolve) => {
    console.log("Generating OTP...");
    setTimeout(() => {
      const otp = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
      console.log(`Your OTP is: ${otp}`);
      resolve(otp);
    }, 2000);
  });
}

// Step 2: Verify OTP (Promise)
function verifyOTP(generatedOTP, enteredOTP) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (generatedOTP === enteredOTP) {
        resolve("OTP Verified Successfully!");
      } else {
        reject("Invalid OTP. Verification Failed.");
      }
    }, 1000);
  });
}

// Example usage
generateOTP()
  .then((otp) => {
    // Simulate user entering OTP (replace with real input in practice)
    const userEnteredOTP = otp; // try changing this to a wrong number
    console.log(`User entered: ${userEnteredOTP}`);

    return verifyOTP(otp, userEnteredOTP);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

