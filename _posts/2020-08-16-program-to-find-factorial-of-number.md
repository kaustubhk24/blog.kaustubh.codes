---
id: 623
title: Program to Find Factorial of Number
date: 2020-08-16T11:24:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/program-to-find-factorial-of-number/
permalink: /program-to-find-factorial-of-number/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/blog-post.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/841778426836164876
rank_math_analytic_object_id:
  - "227"
categories:
  - CPP
---
<pre><br /><br /><br /><br />#include &lt;iostream><br />using namespace std;<br />int main()<br />{<br /> int a,n;<br /> cout&lt;&lt;"Enter Number ";<br /> cin>>n;<br /> /*if(n==0)<br /> {<br />  cout&lt;&lt;"The Factorial is 1";<br /> }<br /> else if(n&lt;0)<br /> {<br />  cout&lt;&lt;"Factorial of negative numbers can't find";<br /> }<br /> else*/ if(n>0)<br /> {<br />  int fact=1;<br />  for(int i=1;i&lt;=n;i++)<br />  {<br />   fact=fact*i;<br />   <br />  }<br />   cout&lt;&lt;"The factorial is:";<br />   cout&lt;&lt;fact;<br /> <br />  <br /> }<br /> <br />}<br /><br /><br /></pre>