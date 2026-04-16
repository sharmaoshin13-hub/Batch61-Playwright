<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
function countdown(start, callback) {
  if (start === 0) {
    // When countdown finishes, call the callback
    callback();
    return;
  }

  console.log(start);

  // Wait 1 second, then call countdown again with start - 1
  setTimeout(() => {
    countdown(start - 1, callback);
  }, 1000);
}

// Example usage
countdown(5, () => {
  console.log("Go!");
});
