---
slug: /program-to-find-factorial-of-number/
title: Program to Find Factorial of Number
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Factorial Numbers]
---
```cpp title=factorial.cpp
#include <iostream>
using namespace std;
int main()
{
 int a,n;
 cout<<"Enter Number ";
 cin>>n;
 /*if(n==0)
 {
  cout<<"The Factorial is 1";
 }
 else if(n<0)
 {
  cout<<"Factorial of negative numbers can't find";
 }
 else*/ if(n>0)
 {
  int fact=1;
  for(int i=1;i<=n;i++)
  {
   fact=fact*i;
   
  }
   cout<<"The factorial is:";
   cout<<fact;
 
  
 }
 
}
```