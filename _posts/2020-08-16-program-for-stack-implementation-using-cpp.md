---
id: 602
title: Program for Stack Implementation using CPP
date: 2020-08-16T12:15:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-for-stack-implementation-using-cpp/
permalink: /program-for-stack-implementation-using-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-stack-implementation-using.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6454829237641916437
rank_math_analytic_object_id:
  - "206"
categories:
  - CPP
---
<pre><br />#include&lt;iostream><br />using namespace std;<br /><br />int s[10],i;<br />int top=-1;<br />	int display()<br />	{<br />		cout&lt;&lt;"Stack:"&lt;&lt;endl;<br />		for(i=0;i&lt;=top;i++)<br />		{<br />			cout&lt;&lt;"Element at position "&lt;&lt;i&lt;&lt;" is "&lt;&lt;s[i]&lt;&lt;endl;<br />		}<br />	}<br />	bool isfull()<br />	{<br />		if(top==9)<br />			return 1;<br />		else <br />			return 0;<br />	}<br />	bool isempty()<br />	{<br />		if(top==-1)<br />			return 1;<br />		else<br />			return 0;<br />	}<br />int main()<br />{<br />	int ch;<br />	while(ch!=-1)<br />	{<br />		cout&lt;&lt;"n-----MENU-----"&lt;&lt;endl;<br />		cout&lt;&lt;"1.Push."&lt;&lt;endl;<br />		cout&lt;&lt;"2.Pop."&lt;&lt;endl;<br />		cout&lt;&lt;"3.Display"&lt;&lt;endl;<br />		cout&lt;&lt;"4.Exit"&lt;&lt;endl;<br />		cout&lt;&lt;"Enter a choice:";<br />		cin>>ch;<br />		switch(ch)<br />		{<br />			case 1:<br />				if(isfull())<br />				{<br />					cout&lt;&lt;"Stack is full"&lt;&lt;endl;<br />					break;<br />				}<br />				else<br />				{<br />					top=top+1;<br />					cout&lt;&lt;"Enter a character:";<br />					cin>>s[i];<br />					display();<br />					if(isfull())<br />					{<br />						cout&lt;&lt;"Stack is Full!"&lt;&lt;endl;<br />					}<br />					break;<br />				}<br />			case 2:<br />				if(isempty())<br />				{<br />					cout&lt;&lt;"Stack is empty!"&lt;&lt;endl;<br />					break;<br />				}	<br />				else<br />				{<br />					cout&lt;&lt;s[i]&lt;&lt;" is removed!"&lt;&lt;endl;<br />					top=top-1;<br />					display();<br />					if(isempty())<br />					{<br />						cout&lt;&lt;"Stack is Empty!"&lt;&lt;endl;<br />					}<br />					break;<br />				}<br />			case 3:<br />				if(isempty())<br />				{<br />					cout&lt;&lt;"Stack is empty!"&lt;&lt;endl;<br />				}<br />				else<br />					display();<br />				break;<br />			case 4:<br />				exit(0);	<br />		}<br />	}<br />}<br /><br /><br /><br /></pre>