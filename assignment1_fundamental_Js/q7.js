// 7. Write a program to input the Principal, Rate and Time and calculate the
// Simple Interest.

function SI(){

    let p=prompt("Calculate your Simple Intrest \t Enter Principal amount")
    let r=prompt("Calculate your Simple Intrest \t Enter Rate of intrest")
    let t=prompt("Calculate your Simple Intrest \t Enter Rate of duration(in year)")

    simpleIntrest=(p*r*t)/100;

    document.write("Your simple intrest is: ₹"+simpleIntrest);

}
SI();