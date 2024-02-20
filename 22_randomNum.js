function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  
  function delayRandomNumber(delay) {
    const startTime = Date.now();
  
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
  
      console.log(`Generated random number: ${randomNumber}`);
    }, delay);
  
    function updateRemainingTimeMessage() {
      const remainingTime = Math.max(0, (3000 - (Date.now() - startTime)) / 1000);
  
      console.log(`Time remaining until random number generation: ${remainingTime} seconds`);
  
      if (remainingTime > 0) {
        setTimeout(updateRemainingTimeMessage, 1000);
      }
    }
  
    setTimeout(updateRemainingTimeMessage, 1000);
  }
  
  const delay = 3000;
  delayRandomNumber(delay);