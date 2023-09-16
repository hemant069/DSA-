//Problem Statement: Find the gcd of two numbers.


let num1=4;
let num2=8;
let max=Infinity
for(let i=1;i<=Math.min(num1,num2);i++){
    if(num1%i==0 && num2%i==0){
        max=Math.max(i)
    }

}

console.log(max)