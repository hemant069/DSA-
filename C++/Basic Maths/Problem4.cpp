#include <iostream>
using namespace std;

int main() 
{
   
int num1=4;
int num2=8;


int ans;

for(int i=1;i<=min(num1,num2);i++){
    if(num1%i==0&&num2%i==0){
        ans=i;
    }
}

cout<<ans;
}