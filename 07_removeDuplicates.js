// Function to remove duplicates from an array
function removeDuplicates(array) {
    // Initialize a result array and a hash set
    const result = [];
    const hashSet = new Set();
  
    // Iterate through the input array using a for loop
    for (let i = 0; i < array.length; i++) {
      // If the current item is not in the hash set, add it to the result array and the hash set
      if (!hashSet.has(array[i])) {
        result.push(array[i]);
        hashSet.add(array[i]);
      }
    }
  
    // Return the result array, which contains no duplicates
    return result;
  }
  
  // Example usage:
  const cartItems = ['apple', 'banana', 'Akbar', 'Akbar', 'apple', 'orange', 'banana'];
  const uniqueCartItems = removeDuplicates(cartItems);
  console.log(uniqueCartItems); // Output: ['apple', 'banana', 'orange']