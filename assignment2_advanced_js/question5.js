class Mobike {
    bno; phno; name; days; charge;
    input() {
        this.bno = prompt("Enter bike no.")
        this.phno = prompt("Enter phone no.")
        this.name = prompt("Enter name")
        this.days = prompt("Enter days for bike taken on rent")
    }
    compute() {
        if (this.days <= 5) {
            this.charge = this.days * 500;
        }
        else if (this.days > 5 && this.days <= 10) {
            this.charge = (5 * 500) + ((this.days - 5) * 400)
        }
        else if (this.days > 10) {
            this.charge = (5 * 500) + (5 * 400) + ((this.days - 10) * 200)
        }
    }
    disp() {
        document.write("Bike No.: " + this.bno + "<br>")
        document.write("Phone No.: " + this.phno + "<br>")
        document.write("Name: " + this.name + "<br>")
        document.write("No.of Days: " + this.days + "<br>")
        document.write("Charge: " + this.charge + "<br>")
    }
}

let customerobj = new Mobike;
customerobj.input();
customerobj.compute();
customerobj.disp();