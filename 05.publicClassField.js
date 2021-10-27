class Customer {
  //public fields
  firstName;
  lastName;
  balance = 0;
  constructor(balance) {
    if (balance) {
      this.balance = balance; //cara mengakses public field
    }
  }
}
const galih = new Customer();
console.info(galih);
