// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Calculate Fahrenheit from Celsius
    const fahrenheit = (celsius * 9) / 5 + 32;
  
    // Return the result
    return fahrenheit;
  }
  
  // Example usage:
  const celsius = 25;
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);