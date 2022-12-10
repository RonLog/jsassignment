let name=prompt("Enter name")
let age=prompt("Enter age")
let sex=prompt("enter M for male \n Enter F for Female")
let taxableI=prompt("Enter Taxable Income")

if(age>65 || sex=="F"){
    tax=0;

}

else if(age<=65 && sex=="M" && taxableI>160000 && taxableI<=500000){
    
    tax=((taxableI-160000)*(10/100))
    
}
else if(age<=65 && sex=="M" && taxableI>500000 && taxableI<=800000 ){
    
    tax=((taxableI-500000)*(20/100))+34000
    
}
else if(age<=65 && sex=="M" && taxableI>800000){
    
    tax=((taxableI-800000)*(30/100))+94000

}

document.write("Payable Income Tax: ₹"+tax)