
// using hash Array solution


#include <iostream>
using namespace std;

void MissingElement(int n,int arr[],int hash[]){
  
  for(int i=0;i<n;i++){

    hash[arr[i]]=1;
    
    
  }
  
  
  for(int i=1;i<n;i++){
    if(hash[i]==0){
      std::cout << i << std::endl;
      break;
    }
  }
  
  
  
  
}

int main() 
{
  int n=5;
  int arr[n]={1,2,3,5,6};
  int hash[n+1]={0};
  
  MissingElement(n,arr,hash);
  
    return 0;
}



// Better Solution 






#include <iostream>
using namespace std;



int main() 
{
  int n=5;
  int arr[n]={1,2,3,5,6};
  
  
  int sum1=n*(n+1)/2; 
  
  int sum2=0; 
  
  for(int i=0;i<n-1;i++){
    sum2+=arr[i];
  }
  
  std::cout << sum1-sum2 << std::endl;
  

  
    return 0;
}