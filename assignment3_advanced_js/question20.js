class RailwayTicket {

    name; coach; mobno; amt; totalamt;

    main() {
        this.accept()
        this.update()
        this.display()
    }

    accept() {
        this.name = prompt("Enter Passenger Name")
        this.coach = prompt("Enter The Type of Coach Wants to Travel:-First_AC,Second_AC,Third_AC,Sleeper")
        this.mobno = parseInt(prompt("Enter The Passenger Mobile Number"))
        this.amt = parseInt(prompt("Enter The Amount Bill Paid"))
    }

    update() {
        if (this.coach === "First_AC") {
            this.totalamt = this.amt + 700;
        }
        else if (this.coach === "Second_AC") {
            this.totalamt = this.amt + 500;
        }
        else if (this.coach === "Third_AC") {
            this.totalamt = this.amt + 200;
        }
        else {
            this.totalamt = this.amt;
        }

    }

    display() {
        document.write("Passenger Name: " + this.name + "<br>" + "The Type of Coach Wants to Travel: " + this.coach + "<br>" + "Total Amount: " + this.totalamt + "<br>" + "Passenger Mobile Number " + this.mobno);
    }
}

let passengerObj1 = new RailwayTicket();
passengerObj1.main();