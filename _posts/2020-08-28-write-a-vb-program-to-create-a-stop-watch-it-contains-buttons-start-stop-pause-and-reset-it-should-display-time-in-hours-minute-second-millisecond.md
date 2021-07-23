---
id: 578
title: Write a VB program to create a Stop Watch. It contains buttons Start, Stop, Pause and Reset. It should display time in hours, minute, second, millisecond
date: 2020-08-28T14:19:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-create-a-stop-watch-it-contains-buttons-start-stop-pause-and-reset-it-should-display-time-in-hours-minute-second-millisecond/
permalink: /write-a-vb-program-to-create-a-stop-watch-it-contains-buttons-start-stop-pause-and-reset-it-should-display-time-in-hours-minute-second-millisecond/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-create-stop-watch.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2767265239420985996
rank_math_analytic_object_id:
  - "182"
categories:
  - VB.NET
---
<pre><br />Private Sub Command1_Click()<br /><br />	Timer1.Enabled = True<br />	<br />End Sub<br /><br />Private Sub Command2_Click()<br />	Timer1.Enabled = False<br />	<br />	Label1.Caption = 0<br />	Label2.Caption = 0<br />	Label3.Caption = 0<br />	Label4.Caption = 0<br />End Sub<br /><br />Private Sub Command3_Click()<br />	If Command3.Caption = "Pause" Then<br />		Command3.Caption = "Resume"<br />		Timer1.Enabled = False<br />	Else<br />		Command3.Caption = "Pause"<br />		Timer1.Enabled = True<br />	End If<br />End Sub<br /><br />Private Sub Command4_Click()<br />	Label1.Caption = 0<br />	Label2.Caption = 0<br />	Label3.Caption = 0<br />	Label4.Caption = 0<br />	<br />End Sub<br /><br />Private Sub Form_Load()<br />'	Timer1.Enabled = False<br />'Timer1.Enabled = True<br />	<br />'Label4.Caption = Time<br />	<br />End Sub<br /><br />Private Sub Timer1_Timer()<br />	Label4.Caption = Val(Label4.Caption) + Val(1)<br />	If Label4.Caption = 100 Then<br />		Label3.Caption = Val(Label3.Caption) + Val(1)<br />		Label4.Caption = 0<br />	ElseIf Label3.Caption = 59 Then<br />		Label2.Caption = Val(Label2.Caption) + Val(1)<br />		Label3.Caption = 0<br />	ElseIf Label2.Caption = 59 Then<br />		Label1.Caption = Val(Label1.Caption) + Val(1)<br />		Label2.Caption = 0<br />	End If<br />End Sub<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></pre>