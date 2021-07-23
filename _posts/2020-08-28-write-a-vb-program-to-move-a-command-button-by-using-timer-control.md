---
id: 556
title: Write a VB Program to move a command button by using timer control.
date: 2020-08-28T14:37:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-move-a-command-button-by-using-timer-control/
permalink: /write-a-vb-program-to-move-a-command-button-by-using-timer-control/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-move-command-button.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/1310042223102947208
rank_math_analytic_object_id:
  - "161"
categories:
  - VB.NET
---
<pre><br /><br />Private Sub Form_Load()<br /><br />	Timer1.Interval = 1<br />	Timer1.Enabled = True<br />	<br />End Sub<br /><br />Private Sub Timer1_Timer()<br />	Command1.Left = Command1.Left + 2<br />End Sub<br /><br /><br /><br /><br /><br /><br /><br /></pre>