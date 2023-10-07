


// bubble Sort in Javascript
// In the bubble Sort we push the maximun in the last And swaping in the adjustent



n=5
let arr=[5,2,8,3,41];



for(let i=n-1;i>=1;i--){
  for(let j=0;j<=i-1;j++){
    if(arr[j]>arr[j+1]){
      let temp=arr[j+1];
      arr[j+1]=arr[j];
      arr[j]=temp;
    }
  }
  
}

console.log(arr)