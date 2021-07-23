---
id: 617
title: Program for Binary Search in CPP
date: 2020-08-16T11:42:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-for-binary-search-in-cpp/
permalink: /program-for-binary-search-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-binary-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6562444035826638711
rank_math_analytic_object_id:
  - "221"
categories:
  - CPP
---
<pre><br /><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />	int a,n,num,i,mid,beg,end;<br />	cout&lt;&lt;"Enter size of array :";<br />	cin>>n;<br />	int arr[n];<br />	cout&lt;&lt;"Enter array elements :";<br />	for(i=0;i&lt;n;i++)<br />	{<br />		cin>>arr[i];<br />	}<br />	cout&lt;&lt;"Enter element to search :";<br />	cin>>num;<br />    end=n-1;<br />    mid=(beg+end)/2;<br />    while(beg&lt;=end)<br />    {<br />    	if(arr[mid]&lt;num)<br />    	{<br />    		beg=mid+1;<br />		}<br />		else if(arr[mid]==num)<br />		{<br />			cout&lt;&lt;num&lt;&lt;" found at "&lt;&lt;mid+1;<br />			break;<br />		}<br />		else<br />		{<br />			end=mid-1;<br />		}<br />		mid=(beg+end)/2;<br />	}<br />	if(beg>end)<br />	{<br />		cout&lt;&lt;"Not found";<br />	}<br />}<br /><br /><br /></pre>