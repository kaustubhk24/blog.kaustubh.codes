---
id: 619
title: Program to Find Minimum and Maximum Number from Given Array
date: 2020-08-16T11:34:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/program-to-find-minimum-and-maximum-number-from-given-array/
permalink: /program-to-find-minimum-and-maximum-number-from-given-array/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-find-minimum-and-maximum.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8879922242440169352
rank_math_analytic_object_id:
  - "223"
categories:
  - CPP
---
<pre><br /><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />	int arr[10],n,max=0,min;<br />	cout&lt;&lt;"Enter size of array";<br />	cin>>n;<br />	cout&lt;&lt;"Enter array elements";<br />	for(int i=0;i&lt;n;i++)<br />	{<br />		cin>>arr[i];<br />		<br />	}<br />	for(int i=0;i&lt;n;i++)<br />	{<br />	if(arr[i]>max)<br />	{<br />		max=arr[i];<br />		<br />	}<br />	}<br />	min=max;<br />	<br />		for(int i=0;i&lt;n;i++)<br />	{<br />	if(arr[i]&lt;min)<br />	{<br />		min=arr[i];<br />		<br />	}<br />	}<br />	cout&lt;&lt;"max is:";<br />	cout&lt;&lt;max&lt;&lt;endl;<br />	<br />	cout&lt;&lt;min;<br />	<br />}<br /><br /></pre>