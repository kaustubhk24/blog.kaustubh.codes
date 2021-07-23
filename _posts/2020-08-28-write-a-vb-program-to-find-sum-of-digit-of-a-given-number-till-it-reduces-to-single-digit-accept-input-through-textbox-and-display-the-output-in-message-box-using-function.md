---
id: 588
title: 'Write a VB Program to find sum of digit of a given number till it reduces to single digit.             Accept input through textbox and Display the output in Message Box (using function)'
date: 2020-08-28T14:06:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-find-sum-of-digit-of-a-given-number-till-it-reduces-to-single-digit-accept-input-through-textbox-and-display-the-output-in-message-box-using-function/
permalink: /write-a-vb-program-to-find-sum-of-digit-of-a-given-number-till-it-reduces-to-single-digit-accept-input-through-textbox-and-display-the-output-in-message-box-using-function/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-find-sum-of-digit.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/5548347316014393313
rank_math_analytic_object_id:
  - "192"
categories:
  - VB.NET
---
<pre><br /><br />Private Sub Command1_Click()<br /><br />	ans = display()<br />	MsgBox ("Ansis "&ans)<br />End Sub<br />Public Function display() As Integer<br />	s = 0<br />	n = Val(Text1.Text)<br />	While n > 9<br />		s = 0<br />		While n > 0<br />			r = n Mod 10<br />			s = s + r<br />			n = n  10<br />		Wend<br />		n = s<br />	Wend<br />	display = s<br />End Function<br /><br /><br /><br /></pre>