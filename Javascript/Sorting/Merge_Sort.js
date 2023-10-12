


// Merge Sort in javascript

function Merge_Sort(arr,l,h){

    if(l>=h){
      return
    }
    let mid=Math.floor((l+h)/2);
    Merge_Sort(arr,l,mid);
    Merge_Sort(arr,mid+1,h);
    Merge(arr,l,mid,h);
    
  }
  
  function Merge(arr,l,mid,h){
    let temp=[];
    let left=l;
    let right=mid+1;
    while(left<=mid && right<=h){
      if(arr[left]<=arr[right]){
        temp.push(arr[left])
        left++;
      }
      else{
        temp.push(arr[right]);
        right++;
      }
    }
    while(left<=mid){
      temp.push(arr[left]);
      left++;
    }
    while(right<=h){
      temp.push(arr[right]);
      right++;
    }
    
    for(let i=l;i<=h;i++){
      arr[i]=temp[i-l];
    }
  }
  
  
  function main(){
    let arr=[9,2,6,1,28,3,5];
    Merge_Sort(arr,0,arr.length-1);
    console.log(arr)
  }
  
  main()