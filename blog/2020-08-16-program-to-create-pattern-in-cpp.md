---
slug: /program-to-create-pattern-in-cpp/
title: Program to create * pattern in CPP
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Prime Numbers]
---
```cpp title=pattern.cpp
/*

Program for below pattern.
$	$	$	$	$	
$	$	$	$	
$	$	$	
$	$	
$

*/


#include<iostream>
using namespace std;
int main()
{
	for(int i=0;i<5;i++)
	{
		for(int j=i;j<5;j++)
		{
			cout<<"$t";
		}
		cout<<endl;
	}
}

```
