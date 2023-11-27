
// Rotate array at once 


#include <iostream>
#include<bits/stdc++.h>
using namespace std;



int main() 
{
   int n=5;
   int arr[n]={1,2,3,4,5};
   
   int temp=arr[0];
   
   for(int i=0;i<n;i++){
     arr[i]=arr[i+1];
   }
   arr[n-1]=temp;
  for(int i=0;i<n;i++){
    std::cout << arr[i] << std::endl;
  }
    return 0;
}