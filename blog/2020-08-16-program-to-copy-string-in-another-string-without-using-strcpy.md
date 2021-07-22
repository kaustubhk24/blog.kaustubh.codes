---
slug: /program-to-copy-string-in-another-string-without-using-strcpy/
title: Program to Copy String in Another String Without Using strcpy()
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Prime Numbers]
---
```cpp title=strcpy.cpp
#include<iostream>
using namespace std;
int main()
{
	char str1[20],str2[20];
	int i;

	cout<<"Enter String :";
	cin>>str1;
	for(i=0;str1[i]!='';i++)
	{
      str2[i]=str1[i];
	}
	str2[i]='';
	cout<<"Copied String :"<<str2;
}

```