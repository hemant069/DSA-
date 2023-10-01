


function printarr(n,ans){
    for (let i = 0; i < n; i++) {
     console.log(ans[i])
    }
  }
  
  function reversearr(n,arr){
    
    let ans=[];
    for(let i=n-1;i>=0;i--){
      ans[n-i-1]=arr[i];
    }
    printarr(n,ans)
      
    }
    
    
    function main(){
      let n=5;
      let arr=[1,2,3,4,5];
     
      reversearr(n,arr)
    }
    
    
    main()
    