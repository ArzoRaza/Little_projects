// Function to calculate rental cost
function calculateRentalCost(daysRented, carType) {
    // Define the rental costs
    const RENTAL_COSTS = {
      economy: 4000,
      midsize: 10000,
      luxury: 20000,
    };
  
    // Check if the carType is valid
    if (!Object.keys(RENTAL_COSTS).includes(carType)) {
      console.error(`Invalid car type. Please use economy, midsize, or luxury.`);
      return;
    }
  
    // Calculate the rental cost for the given car type
    const rentalCost = RENTAL_COSTS[carType];
  
    // Calculate the total cost
    const totalCost = rentalCost * daysRented;
  
    // Return the total cost
    return totalCost;
  }
  
  // Example usage:
  const daysRented = 5;
  const carType = 'midsize';
  const rentalCost = calculateRentalCost(daysRented, carType);
  console.log(`The rental cost for ${daysRented} days in ${carType} is Rs. ${rentalCost}/-`);