#include <iostream>
using namespace std;

int main() 
{
   int nums=5;
   int start=1;
   for(int i=0;i<nums;i++){
     if(i%2==0)start=1;
     else start=0;
     for(int j=0;j<=i;j++){
      cout << start ;
      start=1-start;
     }
     cout<<endl;
   }
}