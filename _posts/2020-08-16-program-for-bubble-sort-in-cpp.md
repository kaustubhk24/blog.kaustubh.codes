---
id: 605
title: Program for Bubble Sort in CPP
date: 2020-08-16T12:08:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-for-bubble-sort-in-cpp/
permalink: /program-for-bubble-sort-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-bubble-sort-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8290294643085165462
rank_math_analytic_object_id:
  - "209"
categories:
  - CPP
---
<pre><br /><br /><br /><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />	int arr[10],i,n;<br />	<br />	cout&lt;&lt;"Enter array size :";<br />	cin>>n;<br />	cout&lt;&lt;"Enter  array elements :";<br />	for(i=0;i&lt;n;i++)<br />	{<br />		cin>>arr[i];<br />		<br />	}<br />    cout&lt;&lt;"The array before sorting :";<br />    for(int i=0;i&lt;n;i++)<br />    {<br />    	cout&lt;&lt;arr[i]&lt;&lt;"t";<br />	}<br />	cout&lt;&lt;endl&lt;&lt;"Array after sorting :";<br />	for(i=0;i&lt;n;i++)<br />	{<br />		for(int j=0;j&lt;(n-i);j++)<br />		{<br />		   int temp=arr[j];<br />			arr[j]=arr[j+1];<br />			arr[j+1]=temp;<br />		}<br />	}<br />	for(int i=0;i&lt;n;i++)<br />    {<br />    	cout&lt;&lt;arr[i]&lt;&lt;"t";<br />	}<br />}<br /><br /><br /></pre>