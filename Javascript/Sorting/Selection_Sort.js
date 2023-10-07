



// Selection Sort in Javascript

n=5
let arr=[5,2,8,3,41];



for(let i=0;i<=n-2;i++){
  let min=i;
  for(let j=i;j<=n-1;j++){
    if(arr[j]<arr[min]){
       min=j;
    }
   
  }
  let temp=arr[min];
  arr[min]=arr[i];
  arr[i]=temp;
}

console.log(arr)