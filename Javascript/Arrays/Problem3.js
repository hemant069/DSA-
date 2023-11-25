
// Check If Array is Sorted or not (asceding order);


let arr=[3,4,5,1,2];



function isSorted(arr){
  for(let i=1;i<arr.length;i++){
    if(arr[i]<arr[i-1]){
      return false;
    }
    
  }
  return true;
}


console.log(isSorted(arr))