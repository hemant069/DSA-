




function pallindrome(i,str){

    if(i>=Math.floor(str.length/2)) return true;
    
    else if(str[i]!==str[str.length-i-1]) return false;
    
  return  pallindrome(i+1,str);
    
  }
  
  
    
  
      
      
      function main(){
       let str="ama";
      // pallindrome(0,str)
     let bool=pallindrome(0,str);
     if(bool==true){
       console.log("pallindrome");
     }
     else{
       console.log("not pallindrome")
     }
      }
      
      
      main()
      