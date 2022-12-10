class Empl {

    Emp_No; Name; Basic; DA; HRA; TA; PF; Gross;

    main() {
        this.get()
        this.calcu()
        this.display()
    }

    get() {
        this.Emp_No = prompt("Enter Employee No.")
        this.Name = prompt("Enter Name")
        this.Basic = prompt("Enter Basic Salary")
    }

    calcu() {
        if (this.Basic < 10000) {
            this.DA = 0.4 * this.Basic;
            this.TA = 0.08 * this.Basic
            this.HRA = 0.14 * this.Basic
            this.PF = 0.07 * this.Basic
        }
        else if (this.Basic >= 10000 && this.Basic < 20000) {

            this.DA = 0.45 * this.Basic;
            this.TA = 0.1 * this.Basic
            this.HRA = 0.12 * this.Basic
            this.PF = 0.075 * this.Basic
        }
        else if (this.Basic >= 20000) {

            this.DA = 0.53 * this.Basic;
            this.TA = 0.12 * this.Basic
            this.HRA = 0.1 * this.Basic
            this.PF = 0.08 * this.Basic
        }

        this.Gross = (parseInt(this.Basic) + parseInt(this.DA) + parseInt(this.HRA)) - this.PF
    }

    display() {
        document.write("Employee No: " + this.Emp_No + "<br>")
        document.write("Employee Name: " + this.Name + "<br>")
        document.write("Gross Salary: " + this.Gross + "<br>")
        document.write("PF Amount: " + this.PF + "<br>")
    }
}

let empobject = new Empl();
empobject.main();
