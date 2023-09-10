#include <iostream>
using namespace std;

int main() 
{
    int nums= 4;
    
    for(int i=1;i<=nums;i++){
      //numbers
      for(int j=1;j<=i;j++){
       cout <<j;
      }
      
      //space
      
      for(int j=1;j<2*(nums-i);j++){
        cout<<" ";
      }
      
      //numbers
      
      for(int j=i;j>=1;j--){
        cout<<j;
      }
      
      cout<<endl;
      
    }
}