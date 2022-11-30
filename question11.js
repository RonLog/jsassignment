class FruitJiuce {
    pCode = 1234;
    pType = "x1x";
    pSize = 123;
    pPrice = 1234;
    flavour = "choco";
    input() {
        let a = prompt("Enter the Product Code : ");
        this.pCode = parseInt(a);
        this.flavour = prompt("Enter the Flavour (Orange/Apple,etc): ");
        this.pType = prompt("Enter the Pack Type (TetraPack/Bottle, etc): ");
        let b = prompt("Enter the Pack Size (200m1/500ml/1L): ");
        this.pSize = parseInt(b);
        let c = prompt("Enter the Product Price : ");
        this.pPrice = parseInt(c);
    }
    discount() {
        this.pPrice -= 10;
    }

    display() {
        document.write("Product Code: " + this.pCode + "<br>");
        document.write("Flavour : " + this.flavour + "<br>");
        document.write("Pack Type: " + this.pType + "<br>");
        document.write("Pack Size: " + this.pSize + "<br>");
        document.write("Product Price: " + this.pPrice + "<br>");
        document.write("Discount: " + this.pPrice + "<br>");
    }
}

let fruitJuice = new FruitJiuce();
fruitJuice.input();
fruitJuice.discount();
fruitJuice.display();





