function convertToINR(priceInUSD) {
    return priceInUSD * 80;
  }
  
  const inventory = {
    apple: 1.5,
    banana: 0.75,
    orange: 2.25,
    grape: 3.0
  };
  
  function convertInventoryToINR(inventory) {
    return Object.keys(inventory).map(key => ({
      [key]: convertToINR(inventory[key])
    }));
  }
  
  const inventoryINR = convertInventoryToINR(inventory);
  console.log(inventoryINR);