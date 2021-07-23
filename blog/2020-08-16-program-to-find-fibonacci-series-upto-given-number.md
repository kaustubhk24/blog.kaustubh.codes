---
slug: /program-to-find-fibonacci-series-upto-given-number/
title: Program to Find Fibonacci Series Upto Given Number
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Fibonacci]
---

```cpp title=fibonacci.cpp
#include <iostream>
using namespace std;
int main()
{
	int n;
	cout<<"Enter Number ";
	cin>>n;
	cout<<"Series:";
	int n1=0,n2=1,n3;
	cout<<n1;
	cout<<" ";
	cout<<n2;
	
	
	for(int i=1;i<=n;i++)
	{
	n3=n1+n2;
	cout<<" ";
	cout<<n3;
	n1=n2;
	n2=n3;
	
		
	}
}


```
