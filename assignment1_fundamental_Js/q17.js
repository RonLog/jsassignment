// 17.Write a program to find the sum of all 3 digit odd natural numbers,
// which are multiples of 5.


let sum=0;
for(i=101;i<=999;i+=2){
    if(i%5==0){
        sum=sum+i
    }
}
console.log("sum of all 3 digit odd natural no which are multiple of 5: "+sum)