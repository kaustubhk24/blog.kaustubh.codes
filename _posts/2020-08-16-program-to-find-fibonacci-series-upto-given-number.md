---
id: 622
title: Program to Find Fibonacci Series Upto Given Number
date: 2020-08-16T11:28:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-to-find-fibonacci-series-upto-given-number/
permalink: /program-to-find-fibonacci-series-upto-given-number/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-program-to-find-fibonacci-series.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4673070982614115710
rank_math_analytic_object_id:
  - "226"
categories:
  - CPP
---
<pre><br /><br />#include &lt;iostream><br />using namespace std;<br />int main()<br />{<br />	int n;<br />	cout&lt;&lt;"Enter Number ";<br />	cin>>n;<br />	cout&lt;&lt;"Series:";<br />	int n1=0,n2=1,n3;<br />	cout&lt;&lt;n1;<br />	cout&lt;&lt;" ";<br />	cout&lt;&lt;n2;<br />	<br />	<br />	for(int i=1;i&lt;=n;i++)<br />	{<br />	n3=n1+n2;<br />	cout&lt;&lt;" ";<br />	cout&lt;&lt;n3;<br />	n1=n2;<br />	n2=n3;<br />	<br />		<br />	}<br />}<br /><br /><br /><br /><br /></pre>