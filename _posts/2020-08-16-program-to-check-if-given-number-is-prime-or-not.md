---
id: 621
title: Program to Check If Given Number is Prime or NOT
date: 2020-08-16T11:30:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-to-check-if-given-number-is-prime-or-not/
permalink: /program-to-check-if-given-number-is-prime-or-not/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-check-if-given-number-is.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6731887331319583623
rank_math_analytic_object_id:
  - "225"
categories:
  - CPP
---
<pre><br /><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />	int n;<br />	cout&lt;&lt;"Enter a number ";<br />	int flag=0;<br />	cin>>n;<br />	for(int i=2;i&lt;=n/2;i++)<br />	{<br />		if(n%i==0)<br />		{<br />			flag=1;<br />			break;<br />			<br />		}<br />	}<br />	if(flag==0){<br />		cout&lt;&lt;"The number is prime";<br />	}<br />	else{<br />		cout&lt;&lt;"The number is not prime";<br />	}<br />		<br />}<br /><br /><br /></pre>