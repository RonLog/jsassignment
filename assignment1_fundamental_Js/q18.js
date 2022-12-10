// 18.Write a program to input an integer and find its factorial.

function factorial(){
    let n=prompt("Enter a no. to find its factorial")
    let sum=1;
    while(n>0){
        sum=sum*n;
        n--
    }
    return sum;
}

alert(factorial());