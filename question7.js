class Bank {
    name; acno; type; bal;
    main() {
        let bank = new Bank()
        bank.initialise()
        bank.depo(1000)
        bank.withdraw(500)
        bank.print()
    }
    initialise() {
        this.name = prompt("Enter Your Name")
        this.acno = Number(prompt("Enter Your Account Number"))
        this.type = prompt("Enter Type of Account:Saving and Current")
        this.bal = Number(prompt("Enter Amount to Withdraw"))
    }
    depo(a) {

        this.deposit = a;
        this.bal = Number(this.bal) + Number(this.deposit);
    }
    withdraw(b) {
        this.withdraw = b;
        if (this.bal - this.withdraw < 1000) {
            document.write("Minimum balance should be rs1000 " + this.bal + "<br>")
        }
        else
            this.bal = this.bal - this.withdraw;
    }
    print() {
        document.write("Your Name " + this.name + "<br>")
        document.write("Your Account no " + this.acno + "<br>")
        document.write("Account Type " + this.type + "<br>")
        document.write("Account Balance " + this.bal + "<br>")
    }
}

let bankobj1 = new Bank;
bankobj1.main();
