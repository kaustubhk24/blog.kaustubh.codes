---
slug: /program-to-find-length-of-string-in-cpp/
title: Program to Find Length of String in CPP
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Fibonacci]
---

```cpp title=length.cpp
#include<iostream>
using namespace std;
int main()
{
	char str[20];
	cout<<"Enter String :";
	cin>>str;
	int count=0;
	for(int i=0;str[i]!='';i++)
	{
	count++;
	}
	cout<<count;
}


```
