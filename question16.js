class movieMagic {
    year; title; rating;

    main() {
        this.accept();
        this.display();
    }

    accept() {
        this.year = parseInt((prompt("Enter Year of Released of Movie")))
        this.title = prompt("Enter Title of Movie")
        this.rating = parseFloat(prompt("Enter The Popularity Rating of Movie"))
    }

    display() {
        if (this.rating >= 0.0 && this.rating <= 2.0) {
            document.write("Flop")
        }
        else if (this.rating >= 2.1 && this.rating <= 3.4) {
            document.write("Semi-Hit")
        }
        else if (this.rating >= 3.5 && this.rating <= 4.5) {
            document.write("Hit")
        }
        else if (this.rating >= 4.6 && this.rating <= 5.0) {
            document.write("Super-Hit")
        }
    }
}

let criticobj = new movieMagic();
criticobj.main();