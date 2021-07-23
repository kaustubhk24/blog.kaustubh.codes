---
slug: /program-to-find-given-number-is-perfect-or-not/
title: Program to Find Given Number is Perfect or NOT
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Perfect Numbers]
---

```cpp title=perfect.cpp
#include<iostream>
using namespace std;
int main()
{
	int n,sum=0,a=1;
	cout<<"Enter Number :";
	cin>>n;
	while(a<n)
	{
		if(n%a==0)
		{
			sum=sum+a;
			
			
		}
		a++;
	}
	if(sum==n){
		cout<<"Perfect no";
		
	}
	else{
		cout<<"Not perfect";
		
	}
}

```
