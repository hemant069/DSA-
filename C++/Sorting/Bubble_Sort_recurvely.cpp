//find the maximum push to last 
// this below code is done by recurivesily

#include <iostream>
using namespace std;


void bubbleSort(int arr[],int n){
  if(n==1) return;
  
  for(int j=0;j<=n-2;j++){
    if(arr[j+1]<arr[j]){
      int temp=arr[j+1];
      arr[j+1]=arr[j];
      arr[j]=temp;
    }
  }
  
  bubbleSort(arr,n-1);
}

int main() 
{
    int n=6;
    int arr[n]={13,46,24,52,20,9};
    
    bubbleSort(arr,n);
    
    for(int i=0;i<n;i++){
      std::cout << arr[i] << std::endl;
    }
    
    return 0;
}