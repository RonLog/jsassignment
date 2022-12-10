// 14.Write a program to input an integer and find its factorial. Factorial of a
// number is the product of all natural numbers till that number. For
// example, factorial of 5 is 120 since 1×2×3×4×5=120

function factorial(n){
    let sum=1;
    while(n>0){
        sum=sum*n;
        n--
    }
    return sum;
}

console.log(factorial(5))