---
id: 563
title: Write a VB Program to create status bar and display it on onto the form. Status bar should have five panels to display any text, date, time, CAPS ON/OFF, Num ON/OFF.
date: 2020-08-28T14:32:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-create-status-bar-and-display-it-on-onto-the-form-status-bar-should-have-five-panels-to-display-any-text-date-time-caps-on-off-num-on-off/
permalink: /write-a-vb-program-to-create-status-bar-and-display-it-on-onto-the-form-status-bar-should-have-five-panels-to-display-any-text-date-time-caps-on-off-num-on-off/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-create-status-bar.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/680741804966789525
rank_math_analytic_object_id:
  - "166"
categories:
  - VB.NET
---
<pre><br />Private Declare Function GetKeyState Lib "user32" (ByValnVirtKey As Long) As Integer<br />Private Sub Form_Load()<br />	StatusBar1.Panels(1) = "HI"<br /><br />	StatusBar1.Panels(2) = Date<br />	StatusBar1.Panels(3) = Time<br />End Sub<br /><br />Private Sub Timer1_Timer()<br />If GetKeyState(vbKeyCapital) = 0 Then<br />		StatusBar1.Panels(4) = "CAPS OFF"<br />	Else<br />		StatusBar1.Panels(4) = "CAPS ON"<br />	End If<br />	If GetKeyState(vbKeyNumlock) = 0 Then<br />		StatusBar1.Panels(5) = "NUM LOCK OFF"<br />	Else<br />		StatusBar1.Panels(5) = "NUM LOCK ON"<br />	End If<br />	<br />End Sub<br /><br /><br /><br /></pre>