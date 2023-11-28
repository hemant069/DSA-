
// Rotate array k Times ;





function reverseFn(arr,start,end){
    while(start<=end){
      let temp=arr[start];
      arr[start]=arr[end];
      arr[end]=temp;
      start++;
      end--;
    }
  }
  
  function main() {
  let arr=[1,2,3,4,5,6,7];
  let n=7;
  let k=2;
  
    //Reverse n-k elemant
    reverseFn(arr,0,n-1-k)
    // Reverse last k elements
    reverseFn(arr,n-k,n-1)
    // Reverse Whole array;
    reverseFn(arr,0,n-1)
   
   console.log(arr)
  }
  
  main()