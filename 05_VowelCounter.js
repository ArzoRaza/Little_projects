// Function to count the number of vowels in a string
function countVowels(string) {
    // Initialize a counter variable
    let count = 0;
  
    // Iterate through the string using a for loop
    for (let i = 0; i < string.length; i++) {
      // Check if the current character is a vowel
      if ('aeiou'.indexOf(string[i].toLowerCase()) !== -1) {
        // If it is, increment the counter
        count++;
      }
    }
  
    // Return the final count
    return count;
  }
  
  // Example usage:
  const name = 'Akbar ali';
  const vowelCount = countVowels(name);
  console.log(`The number of vowels in '${name}' is ${vowelCount}.`);