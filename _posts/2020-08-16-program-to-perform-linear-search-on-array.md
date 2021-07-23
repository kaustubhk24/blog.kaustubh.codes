---
id: 618
title: Program to Perform Linear Search on Array
date: 2020-08-16T11:36:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-to-perform-linear-search-on-array/
permalink: /program-to-perform-linear-search-on-array/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-perform-linear-search-on.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8245434368759131041
rank_math_analytic_object_id:
  - "222"
categories:
  - CPP
---
<pre><br />#include&ltiostream><br />using namespace std;<br />int main()<br />{<br />	int num,i,n,cnt=0,pos,c=0;<br />	cout&lt;&lt;"Enter array size :";<br />	cin>>n;<br />	cout&lt;&lt;"Enter array elements :";<br />	int arr[n];<br />	for(i=0;i&lt;n;i++)<br />	{<br />		cin>>arr[i];<br />	}<br />	cout&lt;&lt;"Enter element to search :";<br />	cin>>num;<br />	for(i=0;i&lt;n;i++)<br />	{<br />		if(num==arr[i])<br />		{<br />			cout&lt;&lt;"Found at :"&lt;&lt;i+1;<br />			c=1;<br />			break;<br />		}<br />		else{<br />		c=0;<br />		}<br />	}<br />	if(c==0){<br />		cout&lt;&lt;"Element not found!";<br />	}<br />}<br /><br /><br /></pre>