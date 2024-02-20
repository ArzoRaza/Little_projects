// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Main function to reverse the input string after a delay of 2 seconds
  function delayReversal(input) {
    // Reverse the input string
    const reversed = reverseString(input);
  
    // Print the reversed string after a delay of 2 seconds
    setTimeout(() => {
      console.log(reversed);
    }, 2000);
  }
  
  // Example usage
  const input = "Hello, World!";
  delayReversal(input);

