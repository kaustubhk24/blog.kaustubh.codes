---
slug: /program-to-perform-linear-search-on-array/
title: Program to Perform Linear Search on Array
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Linear Search on array]
---

```cpp title=linear-search.cpp
#include<iostream>
using namespace std;
int main()
{
	int num,i,n,cnt=0,pos,c=0;
	cout<<"Enter array size :";
	cin>>n;
	cout<<"Enter array elements :";
	int arr[n];
	for(i=0;i	{
		cin>>arr[i];
	}
	cout<<"Enter element to search :";
	cin>>num;
	for(i=0;i<n;i++)
	{
		if(num==arr[i])
		{
			cout<<"Found at :"<<i+1;
			c=1;
			break;
		}
		else{
		c=0;
		}
	}
	if(c==0){
		cout<<"Element not found!";
	}
}

```
