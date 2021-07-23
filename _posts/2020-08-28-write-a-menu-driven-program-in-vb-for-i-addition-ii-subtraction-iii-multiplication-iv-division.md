---
id: 553
title: 'Write a menu driven program in VB for  i. Addition ii. Subtraction iii. Multiplication iv. Division'
date: 2020-08-28T14:40:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-menu-driven-program-in-vb-for-i-addition-ii-subtraction-iii-multiplication-iv-division/
permalink: /write-a-menu-driven-program-in-vb-for-i-addition-ii-subtraction-iii-multiplication-iv-division/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-menu-driven-program-in-vb-for-i.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/1958589030707211356
rank_math_analytic_object_id:
  - "157"
categories:
  - VB.NET
---
Write a menu driven program in VB for i. Addition ii. Subtraction iii. Multiplication iv. Division 

<pre><br /><br />Private Sub cmdClear_Click()<br />Text1.Text = “”<br />Text2.Text = “”<br />Text3.Text = “”<br />Text1.SetFocus<br />End Sub<br />Private Sub cmdExit_Click()<br />Unload Me<br />End Sub<br />Private Sub mnuadd_Click()<br />Text3.Text = Val(Text1.Text) + Val(Text2.Text)<br />End Sub<br />Private Sub mnuDiv_Click()<br />Text3.Text = Val(Text1.Text) / Val(Text2.Text)<br />End Sub<br />Private Sub mnuMult_Click()<br />Text3.Text = Val(Text1.Text) * Val(Text2.Text)<br />End Sub<br />Private Sub mnusub_Click()<br />Text3.Text = Val(Text1.Text) – Val(Text2.Text)<br />End Sub<br /><br /><br /><br /><br /></pre>