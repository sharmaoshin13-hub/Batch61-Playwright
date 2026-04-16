class ATM {
    constructor(balance) {
        this.balance = balance; // initial balance
    }

    // Format balance to 5-digit precision
    formatBalance() {
        return this.balance.toFixed(2) + " /-";
    }

    withdraw(amount) {
        if (amount <= 0) {
            return "Invalid withdrawal amount.";
        }
        if (amount > this.balance) {
            return "Insufficient Balance. Current balance: " + this.formatBalance();
        }
        this.balance -= amount;
        return `Withdrawal of ${amount.toFixed(2)} /- successful. Remaining balance: ${this.formatBalance()}`;
    }

    checkBalance() {
        return "Your account balance is: " + this.formatBalance();
    }
}

// ✅ Example usage
let atm = new ATM(12367.23);

console.log(atm.checkBalance()); 
// Output: Your account balance is: 12367.23 /-

console.log(atm.withdraw(5000)); 
// Output: Withdrawal of 5000.00 /- successful. Remaining balance: 7367.23 /-

console.log(atm.withdraw(8000)); 
// Output: Insufficient Balance. Current balance: 7367.23 /-
