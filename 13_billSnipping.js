function calculateBill(dishCost, peopleSharing) {
    if (typeof dishCost !== 'number' || typeof peopleSharing !== 'number') {
      throw new Error('Both dishCost and peopleSharing must be numbers');
    }
    
    const totalBill = dishCost * peopleSharing;
    const billPerPerson = totalBill / peopleSharing;
  
    return { totalBill, billPerPerson };
  }
  const dishCost = 20; // cost of each dish in dollars
const peopleSharing = 4; // number of people sharing the dish

const bill = calculateBill(dishCost, peopleSharing);
console.log(bill);