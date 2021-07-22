---
slug: /program-for-binary-search-in-cpp/
title: Program for Binary Search in CPP
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Binary Search]
---
```cpp title=Binary-search.cpp
#include<iostream>
using namespace std;
int main()
{
	int a,n,num,i,mid,beg,end;
	cout<<"Enter size of array :";
	cin>>n;
	int arr[n];
	cout<<"Enter array elements :";
	for(i=0;i<n;i++)
	{
		cin>>arr[i];
	}
	cout<<"Enter element to search :";
	cin>>num;
    end=n-1;
    mid=(beg+end)/2;
    while(beg<=end)
    {
    	if(arr[mid]<num)
    	{
    		beg=mid+1;
		}
		else if(arr[mid]==num)
		{
			cout<<num<<" found at "<<mid+1;
			break;
		}
		else
		{
			end=mid-1;
		}
		mid=(beg+end)/2;
	}
	if(beg>end)
	{
		cout<<"Not found";
	}
}
```