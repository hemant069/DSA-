#include <iostream>
using namespace std;

void printsum(int sum,int n){
  if(n==0){
    std::cout << sum << std::endl;
    return  ;
  }
  sum+=n;
  printsum(sum,n-1);
}
int main() 
{
   int n=5;
   int sum=0;
   printsum(sum,n);
    return 0;
}