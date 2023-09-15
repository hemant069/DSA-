
//Problem Statement: Given an integer N, write a program to count the number of digits in N.




let n=12345;
let count=0;

while(n!==0){
    n=Math.floor(n/10)
    count++;
}

console.log(count)