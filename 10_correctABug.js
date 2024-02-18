// Function to double the quantity of each item in the cart array
function doubleCartQuantity(cart) {
    // Loop through the elements in the cart array
    for (let i = 0; i < cart.length; i++) {
      // Double the quantity of the current item
      cart[i] *= 2;
    }
  }
  
  // Example usage:
  const cart = [1, 2, 3, 4, 5];
  doubleCartQuantity(cart);
  console.log(cart); // Output: [2, 4, 6, 8, 10]