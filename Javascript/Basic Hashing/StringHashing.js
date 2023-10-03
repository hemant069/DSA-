


//basic hashing in javascript;

// what is hashing it's just pre compute and fetching method


//Hashing in string;

function main(){
  
    let str="abcdeae";
    let q=2
    let s=['a','e'];
    // filling the array with zero which is bigger than the size of string
    let hash=new Array(str.length+1).fill(0);
    let c='a'
     for(let i=0;i<str.length;i++){
      hash[str[i].charCodeAt() - c.charCodeAt()]+=1;
     }
     
    
    while(q--){
        // number of queue charcter checking
       console.log(hash[s[q].charCodeAt()-c.charCodeAt()])
    }
    
    
   
    
   
    
    
  }
  
  main()