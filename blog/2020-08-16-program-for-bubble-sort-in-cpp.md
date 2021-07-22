---
slug: /program-for-bubble-sort-in-cpp/
title: Program for Bubble Sort in CPP
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Bubble Sort]
---
```cpp title=bubble-sort.cpp
#include<iostream>
using namespace std;
int main()
{
	int arr[10],i,n;
	
	cout<<"Enter array size :";
	cin>>n;
	cout<<"Enter  array elements :";
	for(i=0;i<n;i++)
	{
		cin>>arr[i];
		
	}
    cout<<"The array before sorting :";
    for(int i=0;i<n;i++)
    {
    	cout<<arr[i]<<"t";
	}
	cout<<endl<<"Array after sorting :";
	for(i=0;i<n;i++)
	{
		for(int j=0;j<(n-i);j++)
		{
		   int temp=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=temp;
		}
	}
	for(int i=0;i<n;i++)
    {
    	cout<<arr[i]<<"t";
	}
}
```