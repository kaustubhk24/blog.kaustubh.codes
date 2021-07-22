---
slug: /program-to-convert-lowercase-to-uppercase-in-cpp/
title: Program to Convert Lowercase to Uppercase in CPP
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Prime Numbers]
---
```cpp title=cases.cpp
#include<iostream>
using namespace std;
int main()
{
	char str[20];
	int i=0;
	cout<<"Enter String :";
	cin>>str;
	for(i=0;str[i]!='';i++)
	
	{
		if(str[i]>=97 && str[i]<=122){
			str[i]=str[i]-32;
			
		}
		
	}

	cout<<"Converted String :"<<str;
}

```