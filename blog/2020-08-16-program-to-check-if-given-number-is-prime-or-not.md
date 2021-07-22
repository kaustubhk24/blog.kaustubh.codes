---
slug: /program-to-check-if-given-number-is-prime-or-not/
title: Program to Check If Given Number is Prime or NOT
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Prime Numbers]
---
```cpp title=prime.cpp
#include<iostream>
using namespace std;
int main()
{
	int n;
	cout<<"Enter a number ";
	int flag=0;
	cin>>n;
	for(int i=2;i<=n/2;i++)
	{
		if(n%i==0)
		{
			flag=1;
			break;
			
		}
	}
	if(flag==0){
		cout<<"The number is prime";
	}
	else{
		cout<<"The number is not prime";
	}
		
}

```
