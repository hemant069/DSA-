#include <iostream>
using namespace std;


void printArr(int ans[],int n){
   for(int i=0;i<n;i++){
    std::cout << ans[i] << std::endl;
  }
}

void reversearr(int n,int arr[]){
  int ans[n];
  
  for(int i=n-1;i>=0;i--){
    ans[n-i-1]=arr[i];
  }
  
  printArr(ans,n);
 

}
int main() 
{
   int n=5;
   int arr[]={1,2,3,4,5};
   reversearr(n,arr);
    return 0;
}