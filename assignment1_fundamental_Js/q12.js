let name=prompt("Enter name")
let address=prompt("Enter address")
let amountp=prompt("Enter amount of purchase")
let type=prompt("Type of purchase \n Enter L fot Laptop \n D for Desktop");
let d=0;
if(type=="L"){
    if(amountp>0 && amountp<=2500){
      d=0;
    }
    else if(amountp>2500 && amountp<=57000){
        d=5
    }
    else if(amountp>5700 && amountp<=100000){
        d=7.5;
    }
    else if(amountp>100000){
        d=10
    }
}

else if(type=="D"){
    if(amountp>0 && amountp<=2500){
      d=5;
    }
    else if(amountp>2500 && amountp<=57000){
        d=7.5
    }
    else if(amountp>5700 && amountp<=100000){
        d=10;
    }
    else if(amountp>100000){
        d=15;
    }
}

let damount=(d/100)*amountp;
let netAmount=amountp-damount;

document.write("Name : "+name+"<BR>"); 
document.write("Address : "+address+"<BR>");
document.write("Total purchase amount : ₹"+amountp+"<BR>");
document.write("Discount availed : ₹"+d+"%<BR>");

document.write("Net payable amount : ₹"+netAmount);