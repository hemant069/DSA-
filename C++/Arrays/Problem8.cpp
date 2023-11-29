
// Linear search;


#include <iostream>
using namespace std;


int Linear_Search(int arr[],int n,int nums){
  
  for(int i=0;i<n;i++){
    if(arr[i]==nums){
      return i;
    }
  }
  
}

int main() 
{
    int n=4;
    int arr[n]={1,2,3,4};
    
    
    std::cout << Linear_Search(arr,n,4) << std::endl;
    
   
    

    
   
}