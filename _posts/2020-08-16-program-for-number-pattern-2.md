---
id: 614
title: Program for Number Pattern 2
date: 2020-08-16T11:49:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-for-number-pattern-2/
permalink: /program-for-number-pattern-2/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-number-pattern-2.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/5867576537481207917
rank_math_analytic_object_id:
  - "218"
categories:
  - CPP
---
<pre><br /><br />/* Program for pattern Below<br /><br />5	<br />5	4	<br />5	4	3	<br />5	4	3	2	<br />5	4	3	2	1	<br /><br />*/<br /><br /><br /><br /><br /><br /><br />#include&lt;iostream><br />using namespace std;<br />int main()<br />{<br />		for(int i=5;i>=1;i--)<br />	{<br />		for(int j=5;j>=i;j--)<br />		{<br />			cout&lt;&lt;j&lt;&lt;"t";<br />		}<br />		cout&lt;&lt;endl;<br />	}<br />}<br /><br /><br /><br /></pre>