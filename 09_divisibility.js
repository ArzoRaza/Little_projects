// Function to print numbers divisible by 3 but not by 2
function printNumbers(arr) {
    // Loop through the array elements
    for (let i = 0; i < arr.length; i++) {
      // Check if the number is divisible by 3 and not by 2
      if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
        // Print the number
        console.log(arr[i]);
      } else {
        // If not, continue to the next iteration
        continue;
      }
    }
  }
  
  // Example usage:
  const numbers = [12, 15, 18, 21, 24, 27];
  printNumbers(numbers);