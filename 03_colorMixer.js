function mixColors(color1, color2) {
    // Convert input to lowercase for case-insensitive comparison
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();
  
    // Use a switch statement to determine the resulting color
    switch (color1 + ' ' + color2) {
      case 'red blue':
      case 'blue red':
        return 'purple';
      case 'red yellow':
      case 'yellow red':
        return 'orange';
      case 'blue yellow':
      case 'yellow blue':
        return 'green';
      default:
        return 'Invalid color combination';
    }
  }
  
  // Example usage:
  console.log(mixColors('Red', 'BLUE')); // Output: purple
  console.log(mixColors('Yellow', 'green')); // Output: Invalid color combination