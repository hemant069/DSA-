//find the maximum push to last 
// this below code is done by recurivesily


let arr=[13,46,24,52,20,9];
let n=6;

function bubbleSort(arr,n){
  
  if(n==1) return
  
  for(let j=0;j<=n-2;j++){
    if(arr[j+1]<arr[j]){
      let temp=arr[j+1];
      arr[j+1]=arr[j];
      arr[j]=temp;
    }
  }
  
  
  bubbleSort(arr,n-1)
}
function main(){
  bubbleSort(arr,n)
  console.log(arr)
}
main()

