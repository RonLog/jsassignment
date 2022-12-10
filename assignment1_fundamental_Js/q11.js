function main(){
let tc=prompt("Enter Total Cost");

if(tc<2000){
    discount=(5/100)*tc;
}
else if(tc>2000 && tc<=5000){
    
    discount=(25/100)*tc;
    
}
else if(tc>5000 && tc<=10000){
    
    discount=(35/100)*tc;
}
else if(tc>10000){
    discount=(50/100)*tc;

}

let ap=tc-discount;

document.write("Total Cost: ₹" +tc+"<br>")
document.write("Discount: ₹" +tc+"<br>")


document.write("Amout Payable: ₹" +ap)

}

main();