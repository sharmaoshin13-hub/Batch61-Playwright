function getFibonacciSeries(limit) {
  let series = [];
  let a = 0, b = 1;

  // Start with 0 and 1
  series.push(a);
  series.push(b);

  // Generate next numbers until we reach the limit
  let next = a + b;
  while (next <= limit) {
    series.push(next);
    a = b;
    b = next;
    next = a + b;
  }

  return series;
}

// Example 1
console.log("Input = 25");
console.log("Output =", getFibonacciSeries(25).join(" "));

// Example 2
console.log("Input = 100");
console.log("Output =", getFibonacciSeries(100).join(" "));
