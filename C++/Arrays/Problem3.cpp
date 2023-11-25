
// Check is Array is Sorted or not (in Accessding order)

#include <iostream>
using namespace std;


bool isSorted(int n,int arr[]){
  
   for(int i=1;i<n;i++){
     if(arr[i]<arr[i-1]){
       return false;
     }
    
   }
    return true;
}

int main() 
{
   int n=6;
   int arr[n]={1,2,3,4,5,6};
  
  std::cout << isSorted(n,arr) << std::endl;
    
}