---
id: 610
title: Program to Find Length of String in CPP
date: 2020-08-16T11:58:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/program-to-find-length-of-string-in-cpp/
permalink: /program-to-find-length-of-string-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-find-length-of-string-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6540544833347391934
rank_math_analytic_object_id:
  - "214"
categories:
  - CPP
---
<pre><br /><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />	char str[20];<br />	cout&lt;&lt;"Enter String :";<br />	cin>>str;<br />	int count=0;<br />	for(int i=0;str[i]!=' ';i++)<br />	{<br />	count++;<br />	}<br />	cout&lt;&lt;count;<br />}<br /><br /><br /></pre>