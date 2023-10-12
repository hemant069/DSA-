#include <iostream>
using namespace std;


void bubbleSort(int arr[],int n,int i){
  if(i==n-1) return;
  int min=i;
  for(int j=0;j<=n-1;j++){
    while(j>0 && arr[j-1]>arr[j]){
      int temp=arr[j-1];
      arr[j-1]=arr[j];
      arr[j]=temp;
      j--;
    }
  }
  
  bubbleSort(arr,n,i+1);
}

int main() 
{
    int n=6;
    int arr[n]={13,46,24,52,20,9};
    
    bubbleSort(arr,n,0);
    
    for(int i=0;i<n;i++){
      std::cout << arr[i] << std::endl;
    }
    
    return 0;
}