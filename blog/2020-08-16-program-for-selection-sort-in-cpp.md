---
slug: /program-for-selection-sort-in-cpp/
title: Program for Selection Sort in CPP
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Selection Sort]
---

```cpp title=selection-sort.cpp
#include<iostream>
 
using namespace std;
 
int main()
{
    int i,j,n,loc,temp,min;
    cout<<"Enter the number of elements:";
    cin>>n;
    cout<<"nEnter the elementsn";
     int a[n];
    for(i=0;i<n;i++)
    {
        cin>>a[i];
    }
 
    for(i=0;i<n-1;i++)
    {
        min=a[i];
        loc=i;
        for(j=i+1;j<n;j++)
        {
            if(min>a[j])
            {
                min=a[j];
                loc=j;
            }
        }
 
        temp=a[i];
        a[i]=a[loc];
        a[loc]=temp;
    }
 
    cout<<"nSorted list is as followsn";
    for(i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
 
    return 0;
}

```
