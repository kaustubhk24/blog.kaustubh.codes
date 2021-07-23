---
id: 598
title: Program for Priority Queue in CPP
date: 2020-08-16T12:19:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/program-for-priority-queue-in-cpp/
permalink: /program-for-priority-queue-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-priority-queue-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/5300697029741983138
rank_math_analytic_object_id:
  - "202"
categories:
  - CPP
---
<pre><br />#include&lt;iostream><br />using namespace std;<br /><br />int rear=-1;<br />int front=-1;<br />int q[10];<br /><br />bool isfull()<br />{<br />	if(rear==9)<br />	{<br />		return 1;<br />	}<br />	else<br />		return 0;<br />}<br />bool isempty()<br />{<br />	if(front==-1)<br />	{<br />		return 1;<br />	}<br />	else<br />		return 0;<br />}<br />int display()<br />{<br />	if(isempty())<br />	{<br />		cout&lt;&lt;"Queue is empty!"&lt;&lt;endl;<br />	}<br />	else<br />	{<br />		for(int i=front;i&lt;=rear;i++)<br />		{<br />			cout&lt;&lt;q[i]&lt;&lt;"->";<br />		}<br />	}<br />}<br />int main()<br />{<br />	int ch,data,count;<br />	while(ch!=-1)<br />	{<br />		cout&lt;&lt;"n----MENU----"&lt;&lt;endl;<br />		cout&lt;&lt;"1.Insert"&lt;&lt;endl;<br />		cout&lt;&lt;"2.Delete"&lt;&lt;endl;<br />		cout&lt;&lt;"3.Display"&lt;&lt;endl;<br />		cout&lt;&lt;"4.Exit"&lt;&lt;endl;<br />		cout&lt;&lt;"Enter a choice:";<br />		cin>>ch;<br />		switch(ch)<br />		{<br />			case 1:<br />				int i;<br />				if(isfull())<br />				{<br />					cout&lt;&lt;"Queue is full!"&lt;&lt;endl;<br />					display();<br />					break;<br />				}<br />				else<br />				{<br />					if(isempty())<br />					{<br />						front=0;<br />						cout&lt;&lt;"Enter a data:";<br />						cin>>data;<br />						q[front]=data;<br />						rear=0;<br />					}<br />					else<br />					{<br />						cout&lt;&lt;"Enter a data:";<br />						cin>>data;<br />						for(i=rear;i>=front;i--)<br />						{<br />							if(data>q[i])<br />							{<br />								q[i+1]=q[i];<br />							}<br />							else<br />							{<br />								break;<br />							}<br />						}	<br />						q[i+1]=data;<br />					rear=rear+1;<br />					}<br />				display();	<br />				break;<br />				}<br />			case 2:<br />				if(isempty())<br />				{<br />					cout&lt;&lt;"Queue underflow!"&lt;&lt;endl;<br />					break;	<br />				}<br />				else<br />				{<br />					data=q[front];<br />					cout&lt;&lt;q[front]&lt;&lt;" is deleted!"&lt;&lt;endl;<br />					front=front+1;<br />					if(front>rear)<br />					{<br />						front=rear=-1;<br />					}<br />					display();<br />					break;<br />				}<br />			case 3:<br />				display();<br />				break;	<br />			case 4:<br />				exit(0);<br />		}<br />	}<br />}<br /><br /></pre>