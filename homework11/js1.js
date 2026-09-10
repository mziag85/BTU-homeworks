// # 🏦 საბანკო ანგარიშის მართვის დავალება

// ## საკითხები
// - კლასი (Class)
// - კონსტრუქტორი (Constructor)
// - ინკაფსულაცია (Private fields)
// - მეთოდები

// ## დავალება

// 1. **შექმენით `BankAccount` კლასი** შემდეგი თვისებებით:
//    - `accountNumber` (public)
//    - `owner` (public)
//    - `balance` (private ველი)

// 2. **დამატეთ შემდეგი მეთოდები `BankAccount` კლასში:**
//    - `deposit(amount)` → თანხის დამატება ანგარიშზე. უარყოს უარყოფითი თანხა.
//    - `withdraw(amount)` → თანხის ჩამოჭრა ანგარიშიდან. აკრძალეთ ზღვარს მიღმა გადახდები.
//    - `getBalance()` → ანგარიშის მიმდინარე ბალანსის დაბრუნება.

// 3. **დაიცავით ინკაფსულაცია:**
//    - `balance` ველი უნდა იყოს პრაივატული და **მისაწვდომი იყოს მხოლოდ გეტერისა და მეთოდების მეშვეობით**.

// 4. **(დამატებითი სავარჯიშო):**
//    - შექმენით `SavingsAccount` კლასის შვილობილი კლასი, რომელიც შეიცავს `interestRate` თვისებას და მეთოდს `addInterest()` ბალანსის გაზრდისთვის.
//    - შექმენით `CheckingAccount` კლასის შვილობილი კლასი, რომელიც საშუალებას აძლევს **ზღვარს მიღმა გადახდას (overdraft)** და გადაფარვის მეთოდი `withdraw` შეიცვალოს.


class BankAccount {
    accountNumber;
    owner;
    #balance;


    constructor(accountNumber, owner, balance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount) {
    if (amount < 0) {
        return;
    }

    this.#balance = this.#balance + amount;
}

   withdraw(amount){
    if(amount> this.#balance){
       return;
    }
    this.#balance = this.#balance - amount;
   }

        
    get balance() {
    return this.#balance;
    }

    
}
 
class SavingsAccount extends BankAccount {
   interestRate;

    constructor(accountNumber, owner, balance, interestRate) {
        super(accountNumber, owner, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
    const interest = this.balance * this.interestRate / 100;
    this.deposit(interest);
   }
}


//  class CheckingAccount extends BankAccount {
//     overdraft;
    
//     constructor(accountNumber, owner, balance,overdraft) {
//         super(accountNumber, owner, balance);
//         this.overdraft = overdraft;
//     }
  
     
 
//     withdraw(amount){
//         ავირიე...
//     }


//  }

const account = new BankAccount(12345, "Mzia", 1000);
console.log(account.balance);

const savings = new SavingsAccount(12345, "Mzia", 1000, 10);

savings.addInterest();

console.log(savings.balance);