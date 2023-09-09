#include <iostream>
using namespace std;

int main() 
{
   int nums=5;
   
   for(int i=1;i<=2*nums-1;i++){
     int star=i;
     if(i>nums) 
     star=2*nums-i;
     for(int j=1;j<=star;j++){
      cout << "*" ;
     }
     cout<<endl;
   }
}