let fno = 2;
let sno = 1;
let n = 10, sum = 0;
for (i = 1; i <= n; i++) {

    console.log(fno);
    sum = sum + fno;
    let next = fno + sno;
    fno = sno;
    sno = next;

}
console.log("Sum of first " + n + " number of lucas series: " + sum)



