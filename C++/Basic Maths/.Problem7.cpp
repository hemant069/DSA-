#include <iostream>
using namespace std;



bool isPrime(int n){
  for(int i=2;i<n;i++){
    if(n%i==0){
      return false;
    }
  }
  return true;
}

int main() 
{
  int n=11;
int val=isPrime(n);
if(n!=1 && val==1){
  std::cout << "Prime" << std::endl;
}
else{
  std::cout << "Not Prime" << std::endl;
}
    return 0;
}