#include <iostream>
using namespace std;

int main() 
{
   int num;
   cin>>num;
   for(int row=0;row<num;row++){
     for(int col=0;col<num;col++){
       cout<<"*";
     }
     cout<<endl;
     
   }
}