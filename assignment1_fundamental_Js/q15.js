// 15.Write a program to input an integer and check whether it is a prime
// number or not


function isprime(){
    let num=prompt("Checking weather a number is prime or not \n Enter a number")
let count=0;
    for(let i=2;i<num;i++){

        if(num%i==0){
            count++;
        }
    }
    if(count>0){
        document.write(num+" is not a prime no")
    }
    else{
        document.write(num+" is a prime no")
    }

}
isprime();