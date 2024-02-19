const customer = {
    name: 'Akbar ali',
    balance: 10000,
  
    deposit: function (amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Invalid deposit amount');
      }
      this.balance += amount;
      console.log(`Deposit successful! New balance: $${this.balance}`);
    },
  
    withdraw: function (amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Invalid withdrawal amount');
      }
      if (this.balance < amount) {
        throw new Error('Insufficient balance');
      }
      this.balance -= amount;
      console.log(`Withdrawal successful! New balance: $${this.balance}`);
    },
  };
  
  // Example usage:
  customer.deposit(500);
  customer.withdraw(299);