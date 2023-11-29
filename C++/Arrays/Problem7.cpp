// Move zero last


#include <iostream>
using namespace std;


void MoveZero(int arr[],int n){
  
  int j=-1;
  
  for(int i=0;i<n;i++){
    if(arr[i]==0){
      j=i;
      break;
    }
  }
  
  for(int i=j+1;i<n;i++){
    if(arr[i]!=0){
      int temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
      j++;
    }
  }
  
}

int main() 
{
    int n=6;
    int arr[n]={1,2,0,3,0,4};
    
    MoveZero(arr,n);
    
   
    

    
    for(int i=0;i<n;i++){
      std::cout << arr[i]<<" ";
    }
}