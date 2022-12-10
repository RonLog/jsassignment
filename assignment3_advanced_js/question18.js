class BookFair {
    Bname; price; discount;
    main() {
        this.input()
        this.calculate()
        this.display()
    }

    input() {
        this.Bname = prompt("Enter The Name of The Book")
        this.price = parseFloat(prompt("Enter The Price of The Book"))
    }

    calculate() {
        if (this.price <= 1000) {
            this.discount = 2;
            this.discount = (this.price / 100) * this.discount;
            this.price = this.price - this.discount;
        }
        else if (this.price > 1000 && this.price <= 3000) {
            this.discount = 3;
            this.discount = (this.price / 100) * this.discount;
            this.price = this.price - this.discount;
        }
        else if (this.price > 3000) {
            this.discount = 5;
            this.discount = (this.price / 100) * this.discount;
            this.price = this.price - this.discount;
        }
    }

    display() {
        document.write("Book Name: " + this.Bname + "<br>" + "Price of Book after Discount: " + this.price);
    }
}

let bookobj1 = new BookFair();
bookobj1.main();