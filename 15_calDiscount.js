const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (originalPrice <= 0 || discountedPrice < 0 || discountedPrice >= originalPrice) {
      throw new Error('Invalid input');
    }
  
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
  
    return Math.round(discountPercentage * 100) / 100;
  };
  const originalPrice = 1000;
const discountedPrice = 80;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(discountPercentage);