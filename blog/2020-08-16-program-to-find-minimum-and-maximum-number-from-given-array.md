---
slug: /program-to-find-minimum-and-maximum-number-from-given-array/
title: Program to Find Minimum and Maximum Number from Given Array
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Minimum and Maximum number]
---

```cpp title=max-min.cpp
#include<iostream>
using namespace std;
int main()
{
	int arr[10],n,max=0,min;
	cout<<"Enter size of array";
	cin>>n;
	cout<<"Enter array elements";
	for(int i=0;i	{
		cin>>arr[i];
		
	}
	for(int i=0;i	{
	if(arr[i]>max)
	{
		max=arr[i];
		
	}
	}
	min=max;
	
		for(int i=0;i<n;i++)
	{
	if(arr[i]<min)
	{
		min=arr[i];
		
	}
	}
	cout<<"max is:";
	cout<<max<<endl;
	
	cout<<min;
	
}
```
