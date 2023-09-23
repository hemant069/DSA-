#include <iostream>
using namespace std;

int main() 
{
   int n=123;
   while(n>0){
     int res=n%10;
     std::cout << res << std::endl;
     n=n/10;
   }
    return 0;
}