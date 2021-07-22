---
slug: /program-for-number-pattern/
title: Program for Number Pattern
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Number Pattern]
---

```cpp title=number-pattern.cpp
/* Program for below pattern 


1	
2	2	
3	3	3	
4	4	4	4	
5	5	5	5	5	




*/


#include<iostream>
using namespace std;
int main()
{
		for(int i=1;i<=5;i++)
	{
		for(int j=1;j<=i;j++)
		{
			cout<<i<<"t";
		}
		cout<<endl;
	}
}


```