---
id: 608
title: Program to Convert Lowercase to Uppercase in CPP
date: 2020-08-16T12:01:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/program-to-convert-lowercase-to-uppercase-in-cpp/
permalink: /program-to-convert-lowercase-to-uppercase-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-convert-lowercase-to.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2897426685737203244
rank_math_analytic_object_id:
  - "212"
categories:
  - CPP
---
<pre><br /><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />	char str[20];<br />	int i=0;<br />	cout&lt;&lt;"Enter String :";<br />	cin>>str;<br />	for(i=0;str[i]!=' ';i++)<br />	<br />	{<br />		if(str[i]>=97 && str[i]&lt;=122){<br />			str[i]=str[i]-32;<br />			<br />		}<br />		<br />	}<br /><br />	cout&lt;&lt;"Converted String :"&lt;&lt;str;<br />}<br /><br /><br /></pre>