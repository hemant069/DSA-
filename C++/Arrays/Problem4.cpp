

// 

#include <iostream>
using namespace std;


int isSorted(int n,int arr[]){
  if(n==0){
    return 0;
  }
  
  int k=1;
  for(int i=1;i<n;i++){
    if(arr[i]!=arr[k-1]){
      arr[k]=arr[i];
      k++;
    }
  }
  return k;
  
}

int main() 
{
   int n=6;
   int arr[n]={1,1,2,2,3,3,3};
  
  std::cout << isSorted(n,arr) << std::endl;
    
}