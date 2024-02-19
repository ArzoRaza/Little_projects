const calculateFinalOrderPrice = (cart) => {
    if (!Array.isArray(cart)) {
      throw new Error('The cart must be an array');
    }
  
    const totalCost = cart.reduce((acc, item) => {
      if (typeof item.unitPrice !== 'number' || typeof item.quantity !== 'number') {
        throw new Error('Each item in the cart must have a unitPrice and quantity property that are numbers');
      }
      return acc + item.unitPrice * item.quantity;
    }, 0);
  
    return totalCost;
  };
  const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 20, quantity: 3 },
    { unitPrice: 30, quantity: 1 },
  ];
  
  const finalOrderPrice = calculateFinalOrderPrice(cart);
  console.log(finalOrderPrice);