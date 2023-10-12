//Elemant at current position => Insertion Sort
// this below code is done by recurivesily


let arr=[13,46,24,52,20,9];
let n=6;

function bubbleSort(arr,n,i){
  
 if(i==n-1) return;
  let min=i;
  for(let j=0;j<=n-1;j++){
    while(j>0 && arr[j-1]>arr[j]){
      let temp=arr[j-1];
      arr[j-1]=arr[j];
      arr[j]=temp;
      j--;
    }
  }
  
  bubbleSort(arr,n,i+1);
  
  

}
function main(){
  bubbleSort(arr,n,0)
  console.log(arr)
}
main()

