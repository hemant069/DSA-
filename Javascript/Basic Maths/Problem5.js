
let n=153;
let num=n;
let nums=num;
let count=0;

while(num>0){
  let res=num%10;
  count++;
  num=Math.floor(num/10);
}

let arm=0;

while(nums>0){
  let res=nums%10;
  arm=arm+Math.pow(res,count);
  nums=Math.floor(nums/10);
}

if(n==arm){
  console.log("armstorng number");
  
}
else{
  console.log("Not armstorng Number")
}