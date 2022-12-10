class ParkingLot {
    vno; hours; bill;
    main() {
        this.input()
        this.calculate()
        this.display()
    }

    input() {
        this.vno = parseInt((prompt("Enter Vehicle Number")))
        this.hours = parseInt(prompt("Enter The Numbers of Hours Vehicle is Parked"))
    }

    calculate() {
        if (this.hours === 1) {
            this.bill = this.hours * 3;
        }
        else if (this.hours > 1) {
            this.bill = (this.hours - 1) * 1.50 + 3;
        }
    }

    display() {
        document.write("Vehicle Number: " + this.vno + "<br>" + "Vehicle Parking Bill: " + this.bill + "<br>" + "Numbers of Hours Vehicle is Parked: " + this.hours);
    }
}


let driverObj1 = new ParkingLot();
driverObj1.main();