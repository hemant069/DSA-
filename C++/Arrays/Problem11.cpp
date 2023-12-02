
// Finding Maximum consucative 1s in the array


#include <iostream>
using namespace std;

int main() 
{
    int maxCount=0;
    int n=6;
    int arr[n]={1, 0, 1, 1, 0, 1};
    int count=0;
    
    for(int i=0;i<n;i++){
      if(arr[i]==1){
        count++;
      }
      else{
        count=0;
      }
      maxCount=max(maxCount,count);
    }
    std::cout << maxCount << std::endl;
    return 0;
}