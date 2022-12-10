class Student {
    name; hindi; english; maths; computer; grade; average;
    accept() {
        this.name = prompt("Enter your Name")
        this.hindi = Number(prompt("Enter marks in Hindi"))
        this.english = Number(prompt("Enter marks in English"))
        this.computer = Number(prompt("Enter marks in Computer"))
        this.maths = Number(prompt("Enter marks in Maths"))
    }
    calcavg() {
        this.average = (this.maths + this.computer + this.english + this.hindi) / 4;
        document.write("Average Marks: " + this.average + "<br>")
        if (this.average >= 90) {
            document.write("Grade : A++")
        }
        else if (this.average >= 75 && this.average <= 89) {
            document.write("Grade : A")
        }

    }
}

let studentObj = new Student();
studentObj.accept();
studentObj.calcavg();