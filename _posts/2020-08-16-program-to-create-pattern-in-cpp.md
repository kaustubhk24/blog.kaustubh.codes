---
id: 616
title: 'Program to create * pattern in CPP'
date: 2020-08-16T11:44:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/program-to-create-pattern-in-cpp/
permalink: /program-to-create-pattern-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-to-create-pattern-in-cpp.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2301225663317009261
rank_math_analytic_object_id:
  - "220"
categories:
  - CPP
---
<pre><br /><br />/*<br /><br />Program for below pattern.<br />$	$	$	$	$	<br />$	$	$	$	<br />$	$	$	<br />$	$	<br />$<br /><br />*/<br /><br /><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />	for(int i=0;i&lt;5;i++)<br />	{<br />		for(int j=i;j&lt;5;j++)<br />		{<br />			cout&lt;&lt;"$t";<br />		}<br />		cout&lt;&lt;endl;<br />	}<br />}<br /><br /><br /></pre>