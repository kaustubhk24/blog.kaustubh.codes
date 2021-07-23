---
id: 611
title: Program for factorial of Number
date: 2020-08-16T11:56:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-for-factorial-of-number/
permalink: /program-for-factorial-of-number/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-factorial-of-number.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/196274318541965327
rank_math_analytic_object_id:
  - "215"
categories:
  - CPP
---
<pre><br />#include&lt;iostream><br />using namespace std;<br />int find_factorial(int);<br />int main()<br />{<br />   int num, fact;<br />   <br />   cout&lt;&lt;"nEnter any integer number:";<br />  cin>>num;<br /> <br />  <br />   fact =find_factorial(num);<br /> <br /><br />  cout&lt;&lt;fact;<br />   return 0;<br />}<br />int find_factorial(int n)<br />{<br />  <br />   if(n==0)<br />      return(1);<br /> <br />  <br />   return(n*find_factorial(n-1));<br />}<br /><br /><br /></pre>