---
id: 572
title: 'Write a VB program to convert temperature in Celsius to Fahrenheit and result should           display into message box. (Accept input through input box)'
date: 2020-08-28T14:24:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-convert-temperature-in-celsius-to-fahrenheit-and-result-should-display-into-message-box-accept-input-through-input-box/
permalink: /write-a-vb-program-to-convert-temperature-in-celsius-to-fahrenheit-and-result-should-display-into-message-box-accept-input-through-input-box/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-convert-temperature.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4745956120942028394
rank_math_analytic_object_id:
  - "176"
categories:
  - VB.NET
---
<pre><br />Private Sub Command1_Click()<br />	temp = Val(InputBox("Enter Temperature in celcius"))<br />	Dim F As Integer<br /><br />	F = temp * 9 / 5 + 32<br />	MsgBox ("Temp in F is "& F)<br />End Sub<br /><br /></pre>