<<<<<<< HEAD
=======

>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297
// Step 1: Fetch marks from "DB"
function getMarks(studentId, callback) {
  console.log(`Fetching marks for student ID: ${studentId}...`);

  // Simulate DB delay (2 seconds)
  setTimeout(() => {
    // Fake marks data
    const marks = Math.floor(Math.random() * 100); 
    console.log(`Marks fetched: ${marks}`);
    callback(marks);
  }, 2000);
}

// Step 2: Calculate grade based on marks
function calculateGrade(marks, callback) {
  console.log("Calculating grade...");

  setTimeout(() => {
    let grade;
    if (marks >= 90) grade = "A+";
    else if (marks >= 75) grade = "A";
    else if (marks >= 60) grade = "B";
    else if (marks >= 40) grade = "C";
<<<<<<< HEAD
    else grade = "B";
=======
    else grade = "F";
>>>>>>> bebb24f603dcf2c71f507f02a62b1c4e21bb2297

    console.log(`Grade calculated: ${grade}`);
    callback(grade);
  }, 2000);
}

// Step 3: Display result
function displayResult(studentId, grade) {
  console.log(`Final Result → Student ID: ${studentId}, Grade: ${grade}`);
}

// Example usage with nested callbacks
getMarks("STU101", (marks) => {
  calculateGrade(marks, (grade) => {
    displayResult("STU101", grade);
  });
});
