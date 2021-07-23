---
id: 600
title: Circular Queue Using Array in CPP
date: 2020-08-16T12:17:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/circular-queue-using-array-in-cpp/
permalink: /circular-queue-using-array-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/circular-queue-using-array-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/3570440691194791069
rank_math_analytic_object_id:
  - "204"
categories:
  - CPP
---
<pre><br />#include&lt;iostream><br />using namespace std;<br /><br />int rear=-1;<br />int front=-1;<br />int q[10];<br /><br />bool isfull()<br />{<br />	if(front==(rear+1)%10)<br />	{<br />		return 1;<br />	}<br />	else<br />		return 0;<br />}<br />bool isempty()<br />{<br />	if(front==-1)<br />	{<br />		return 1;<br />	}<br />	else<br />		return 0;<br />}<br />int display()<br />{<br />	int f=front,r=rear;<br />		if(isempty())<br />		{<br />			cout&lt;&lt;"Queue Underflow!"&lt;&lt;endl;<br />		}<br />		cout&lt;&lt;"Queue elements:n";<br />		if(f&lt;=r)<br />			while(f&lt;=r)<br />		{<br />			cout&lt;&lt;q[f]&lt;&lt;"->";<br />			f++;<br />		}<br />		else<br />		{<br />			while(f&lt;=9)<br />		{<br />			cout&lt;&lt;q[f]&lt;&lt;"->";<br />			f++;<br />		}<br />		f=0;<br />		while(f&lt;=r)<br />		{<br />			cout&lt;&lt;q[f]&lt;&lt;"->";<br />			f++;<br />		}<br />}<br />}<br />int main()<br />{<br />	int ch,data;<br />	while(ch!=-1)<br />	{<br />		cout&lt;&lt;"n----MENU----"&lt;&lt;endl;<br />		cout&lt;&lt;"1.Insert"&lt;&lt;endl;<br />		cout&lt;&lt;"2.Delete"&lt;&lt;endl;<br />		cout&lt;&lt;"3.Display"&lt;&lt;endl;<br />		cout&lt;&lt;"4.Exit"&lt;&lt;endl;<br />		cout&lt;&lt;"Enter a choice:";<br />		cin>>ch;<br />		switch(ch)<br />		{<br />			case 1:<br />				if(isfull())<br />				{<br />					cout&lt;&lt;"Queue is full!"&lt;&lt;endl;<br />					display();<br />					break;<br />				}<br />				else<br />				{<br />					if(isempty())<br />					{<br />						front=0;<br />					}<br />					rear=(rear+1)%10;<br />					cout&lt;&lt;"Enter a data:";<br />					cin>>data;<br />					q[rear]=data;	<br />					display();<br />					break;<br />				}<br />			case 2:<br />				if(isempty())<br />				{<br />					cout&lt;&lt;"Queue underflow!"&lt;&lt;endl;<br />					break;	<br />				}<br />				else<br />				{<br />					if(front==rear)<br />						{<br />						front=rear=-1;<br />						break;<br />						}<br />					else<br />						{<br />							if(front==9)<br />							{<br />								{<br />								data=q[front];<br />								cout&lt;&lt;q[front]&lt;&lt;" is deleted!"&lt;&lt;endl;<br />								front=0;<br />								break;<br />								}<br />							}<br />							else<br />							{<br />							data=q[front];<br />							cout&lt;&lt;q[front]&lt;&lt;" is deleted!"&lt;&lt;endl;		<br />							front=front+1;							<br />						    break;<br />							}<br />						}<br />				}<br />			case 3:<br />				display();<br />				break;	<br />			case 4:<br />				exit(0);<br />		}<br />	}<br />}<br /><br /><br /></pre>