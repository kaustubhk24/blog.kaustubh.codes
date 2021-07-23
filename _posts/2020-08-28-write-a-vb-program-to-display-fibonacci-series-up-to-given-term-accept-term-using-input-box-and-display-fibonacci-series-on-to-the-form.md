---
id: 582
title: 'Write a VB Program to display Fibonacci series up to given term (Accept term  using Input Box )and display Fibonacci series on to the form.'
date: 2020-08-28T14:15:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-display-fibonacci-series-up-to-given-term-accept-term-using-input-box-and-display-fibonacci-series-on-to-the-form/
permalink: /write-a-vb-program-to-display-fibonacci-series-up-to-given-term-accept-term-using-input-box-and-display-fibonacci-series-on-to-the-form/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-display-fibonacci.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8393800562615143500
rank_math_analytic_object_id:
  - "187"
categories:
  - VB.NET
---
<pre><br />Private Sub Command1_Click()<br />	n = InputBox("Enter The Term")<br />	a = 0<br />	b = 1<br />	Print "Fibonacci Series is : "<br />	Print a<br />	Print b<br />	For i = 1 To n - 2<br />		c = a + b<br />		a = b<br />		b = c<br />		Print c<br />	Next<br />End Sub<br /><br /><br /></pre>