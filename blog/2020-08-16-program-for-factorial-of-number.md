---
slug: /program-for-factorial-of-number/
title: Program for factorial of Number
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Deque]
---

```cpp title=factorial.cpp
#include<iostream>
using namespace std;
int find_factorial(int);
int main()
{
   int num, fact;
   
   cout<<"nEnter any integer number:";
  cin>>num;
 
  
   fact =find_factorial(num);
 

  cout<<fact;
   return 0;
}
int find_factorial(int n)
{
  
   if(n==0)
      return(1);
 
  
   return(n*find_factorial(n-1));
}
```