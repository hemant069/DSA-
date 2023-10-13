

function QuickSortPivot(arr,low,high){
    let pivot=arr[low];
    let i=low;
    let j=high;
    
    while(i<j){
      
      while(arr[i]<=pivot && i<=high-1){
        i++;
      }
      while(arr[j]>pivot && j>=low+1){
        j--;
      }
    if(i<j){
     swap(arr,i,j)
    }
    
    }
   swap(arr,low,j)
    return j;
  }
  
  
  // swaping 
  
  function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
  }
  
  
  
  function QuickSort(arr,low,high){
    if(low<high){
      
      let pivot=QuickSortPivot(arr,low,high);
      //console.log(pivot)
      QuickSort(arr,low,pivot-1);
      QuickSort(arr,pivot+1,high);
    }
  }
  
  
  
  
  function main(){
    let arr=[1,5,6,7,2,3,4];
    let n=7;
    QuickSort(arr,0,n-1)
    console.log(arr);
    
  }
  
  main()
  
  
  