---
id: 584
title: 'Write a VB Program to display the reverse of a given number using function.  (Accept number through textbox and display result using message box'
date: 2020-08-28T14:13:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-display-the-reverse-of-a-given-number-using-function-accept-number-through-textbox-and-display-result-using-message-box/
permalink: /write-a-vb-program-to-display-the-reverse-of-a-given-number-using-function-accept-number-through-textbox-and-display-result-using-message-box/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-display-reverse-of.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/1223190664849758074
rank_math_analytic_object_id:
  - "188"
categories:
  - VB.NET
---
<pre><br /><br />Private Sub Command1_Click()<br />	Dim n As Integer<br />n = Val(Text1.Text)<br />	Dim a As Integer<br />	Dim r As Integer<br />	<br />	While n &lt;> 0<br />		a = n Mod 10<br />		r = r * 10 + a<br />		n = n  10<br />	Wend<br />	MsgBox ("revers is" & r)<br />End Sub<br /><br /><br /></pre>