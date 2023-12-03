
// Broute Force Approch


#include <iostream>
using namespace std;

int main() 
{
   int n=5;
   int arr[n]={2,3,5,1,9};
   int k=10;
   int longest=0;
   
   for(int i=0;i<n;i++){
     for(int j=i;j<n;j++){
       int sum=0;
       for(int k=i;k<=j;k++){
         sum+=arr[k];
       }
       if(sum==k){
         longest=max(longest,j-i+1);
       }
     }
     
   }
   std::cout << longest << std::endl;
    return 0;
}