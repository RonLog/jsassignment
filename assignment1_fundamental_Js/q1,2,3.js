// 1. What is the value of y after evaluating the expression given below?
//  y+=++y + y-- + --y; when let y=8

let y=8;
y=y+ ++y+y-- ;
console.log(y)

// 2. Give the output of the following expression:
//  a+=a++ + ++a + --a + a--; when a=7

let a=7;
a+=a++ + ++a+--a+a--;
console.log(a)

// 3. If let y=10 then find:
//  z=(++y * (y++ +5));

let d=10;
z=(++d*(d+++5))
console.log(z)
