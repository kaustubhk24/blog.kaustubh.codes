---
id: 609
title: Program to Copy String in Another String Without Using strcpy()
date: 2020-08-16T12:00:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/program-to-copy-string-in-another-string-without-using-strcpy/
permalink: /program-to-copy-string-in-another-string-without-using-strcpy/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-copy-string-in-another.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2979728054028547310
rank_math_analytic_object_id:
  - "213"
categories:
  - CPP
---
<pre><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />	char str1[20],str2[20];<br />	int i;<br /><br />	cout&lt;&lt;"Enter String :";<br />	cin>>str1;<br />	for(i=0;str1[i]!=' ';i++)<br />	{<br />      str2[i]=str1[i];<br />	}<br />	str2[i]=' ';<br />	cout&lt;&lt;"Copied String :"&lt;&lt;str2;<br />}<br /><br /></pre>