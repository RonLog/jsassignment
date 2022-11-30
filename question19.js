class ElectricBill {
    n; units; bill; charged;

    main() {
        this.accept()
        this.calculate()
        this.print()
    }

    accept() {
        this.n = (prompt("Enter Consumer Name"))
        this.units = parseInt(prompt("Enter The Numbers of Units Electriciy is Consumed"))

    }

    calculate() {
        if (this.units <= 100) {
            this.bill = this.units * 2;
        }
        else if (this.units > 100 && this.units <= 200) {
            this.bill = this.units * 3;

        }
        else if (this.units > 200 && this.units >= 300) {
            this.charged = this.bill * (2.5 / 100);
            this.bill = 5 * this.units + this.charged;//here error undefined comes
        }
    }

    print() {
        document.write("Customer Name: " + this.n + "<br>" + "Number of Units Consumed: " + this.units + "<br>" + "Bill Amount: " + this.bill);
    }

}

let personObj1 = new ElectricBill();
personObj1.main();