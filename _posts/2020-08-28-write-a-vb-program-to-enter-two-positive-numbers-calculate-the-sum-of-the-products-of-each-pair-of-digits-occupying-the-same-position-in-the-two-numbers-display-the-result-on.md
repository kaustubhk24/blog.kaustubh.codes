---
id: 558
title: 'Write a VB program to enter two positive numbers, calculate the sum of the products of             each pair of digits occupying the same position in the two numbers. Display the result on              to the form. Example: If first number is 45 and second number is 534, then output will be 32. (0*5 + 4*3 + 5*4 = 32)'
date: 2020-08-28T14:36:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-enter-two-positive-numbers-calculate-the-sum-of-the-products-of-each-pair-of-digits-occupying-the-same-position-in-the-two-numbers-display-the-result-on/
permalink: /write-a-vb-program-to-enter-two-positive-numbers-calculate-the-sum-of-the-products-of-each-pair-of-digits-occupying-the-same-position-in-the-two-numbers-display-the-result-on/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-enter-two-positive.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/3205837988617079148
rank_math_analytic_object_id:
  - "162"
categories:
  - VB.NET
---
Write a VB program to enter two positive numbers, calculate the sum of the products of each pair of digits occupying the same position in the two numbers. Display the result on to the form. Example: If first number is 45 and second number is 534, then output will be 32. (0\*5 + 4\*3 + 5*4 = 32) 

<pre><br />Private Sub Command1_Click()<br />	Dim no1 As Integer<br />	Dim no2 As Integer<br />	Dim r1 As Integer, r2 As Integer, sum As Integer<br />		no1 = Val(Text1.Text)<br /><br /><br />	no2 = Val(Text2.Text)<br />	While no1 Or no2<br />		r1 = no1 Mod 10<br />		r2 = no2 Mod 10<br />		prod = r1 * r2<br />		sum = sum + prod<br />		no1 = no1  10<br />		no2 = no2  10<br />	Wend<br />	Print "Sum of Product is "; sum<br />	<br />End Sub<br /> <br /><br /><br /><br /></pre>