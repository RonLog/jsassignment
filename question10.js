class Library {
    acc_num; title; author;
    main() {
        let library = new Library;
        library.input();
        library.compute();
        library.display();
    }
    input() {
        this.acc_num = prompt("Enter accession number")
        this.title = prompt("Enter book title")
        this.author = prompt("Enter book author name")
    }
    compute() {
        let late = prompt("Enter no. of late days")

        this.fine = late * 2;
    }
    display() {
        document.write("Accession No." + this.acc_num + "<br>")
        document.write("Title: " + this.title + "<br>")
        document.write("Author: " + this.author + "<br>")
        document.write("Fine: " + this.fine + "<br>")

    }
}

let bookobj = new Library()
bookobj.main();
