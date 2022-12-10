// 16.Write a program to find the sum of all 3-digit even natural numbers

function main(){

    let sum=0;
    for(let i=100;i<=998;i+=2){

        sum=sum+i;
    }
    console.log("sum : "+sum)

}
main();