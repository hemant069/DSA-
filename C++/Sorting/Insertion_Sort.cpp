

#include <iostream>
using namespace std;

void insertion_sort(int arr[],int n){
  for(int i=0;i<n-1;i++){
    int j=i;
    while(j>0 && arr[j-1]>arr[j]){
      int temp=arr[j-1];
      arr[j-1]=arr[j];
      arr[j]=temp;
      j--;
    }
  }
}

int main() 
{
  int n=6;
    int arr[n]={5,3,2,4,1,9};
    insertion_sort(arr,n);
    for(int i=0;i<n;i++){
      std::cout << arr[i] << std::endl;
    }
    
    return 0;
}