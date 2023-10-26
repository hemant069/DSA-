// Find the largest Elemant in the array


#include <iostream>
using namespace std;

int main() 
{
   int n=5;
   int arr[n]={2,5,1,3,0};
   int max=arr[0];
   for(int i=0;i<n;i++){
     if(max<arr[i]){
       max=arr[i];
     }
   }
   std::cout << max << std::endl;
    return 0;
}