




let arr=[5,3,2,4,1,9];

for(let i=0;i<arr.length-1;i++){
  let j=i;
  while(j>0&&arr[j-1]>arr[j]){
    let temp=arr[j];
    arr[j]=arr[j-1];
    arr[j-1]=temp;
     j--;
  }
 
}

console.log(arr)