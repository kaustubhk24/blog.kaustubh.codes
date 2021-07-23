---
id: 620
title: Program to Find Given Number is Perfect or NOT
date: 2020-08-16T11:32:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-to-find-given-number-is-perfect-or-not/
permalink: /program-to-find-given-number-is-perfect-or-not/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-find-given-number-is-perfect.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4861592363821896786
rank_math_analytic_object_id:
  - "224"
categories:
  - CPP
---
<pre><br /><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />	int n,sum=0,a=1;<br />	cout&lt;&lt;"Enter Number :";<br />	cin>>n;<br />	while(a&lt;n)<br />	{<br />		if(n%a==0)<br />		{<br />			sum=sum+a;<br />			<br />			<br />		}<br />		a++;<br />	}<br />	if(sum==n){<br />		cout&lt;&lt;"Perfect no";<br />		<br />	}<br />	else{<br />		cout&lt;&lt;"Not perfect";<br />		<br />	}<br />}<br /><br /><br /></pre>