#include <iostream>
using namespace std;


void Reverse(int arr[],int start,int end){
  
  while (start <= end)
  {
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

int main() 
{
    int n=7;
    int arr[n]={1,2,3,4,5,6,7};
    int k=2;
    
  Reverse(arr, 0, n - k - 1);
  // Reverse last k elements
  Reverse(arr, n - k, n - 1);
  // Reverse whole array
  Reverse(arr, 0, n - 1);
    
    for(int i=0;i<n;i++){
      std::cout << arr[i]<<" ";
    }
}