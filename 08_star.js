// Function to print inverted right-angled triangle pattern
function printInvertedTriangle(i) {
    // Check if input is a positive integer
    if (i < 1 || !Number.isInteger(i)) {
      console.log("Please provide a positive integer as input.");
      return;
    }
  
    // Loop through the number of rows
    for (let row = i; row > 0; row--) {
      // Create a string of asterisks with the current row length
      let rowString = "*".padStart(row, "*");
      
      // Print the row string
      console.log(rowString);
    }
  }
  
  // Example usage:
  printInvertedTriangle(6);