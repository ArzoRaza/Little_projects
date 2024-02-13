// Function to capitalize the first letter of a string if it's lowercase
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage:
const userName = 'arzo raja';
const capitalizedName = capitalizeFirstLetter(userName);
console.log(capitalizedName); // Output: 'Arzo raja'