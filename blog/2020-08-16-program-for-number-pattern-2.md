---
slug: /program-for-number-pattern-2/
title: Program for Number Pattern 2
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Number Pattern]
---

```cpp title=number-pattern.cpp
/* Program for pattern Below

5	
5	4	
5	4	3	
5	4	3	2	
5	4	3	2	1	

*/



#include<iostream>
using namespace std;
int main()
{
		for(int i=5;i>=1;i--)
	{
		for(int j=5;j>=i;j--)
		{
			cout<<j<<"t";
		}
		cout<<endl;
	}
}

```
