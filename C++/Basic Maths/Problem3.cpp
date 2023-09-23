#include <iostream>
using namespace std;

int main() 
{
  int nums=121;
   int n=nums;
   int y=0;
   while(n>0){
     int res=n%10;
     y=y*10+res;
     n=n/10;
   }
   if(nums==y){
     cout << "pallindrome" ;
   }
   else{
     cout<<"not pallindrome";
   }
    return 0;
}