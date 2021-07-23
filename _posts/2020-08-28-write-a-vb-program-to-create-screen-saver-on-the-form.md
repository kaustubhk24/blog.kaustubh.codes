---
id: 549
title: Write a VB program to create screen saver on the form.
date: 2020-08-28T14:44:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-create-screen-saver-on-the-form/
permalink: /write-a-vb-program-to-create-screen-saver-on-the-form/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-create-screen-saver.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4799094823054132175
rank_math_analytic_object_id:
  - "152"
categories:
  - VB.NET
---
<pre><br /> Dim n As Integer<br />   Private Sub Form_Load()<br />                Label1.Top = Me.Height / 2<br />                Label1.Left = Me.Width<br />                Timer1.Interval = 1<br />                Timer1.Enabled = True<br />               <br />End Sub<br />Private Sub Timer1_Timer()<br />               <br />                If n &lt; 200 Then<br />                                n = n + 1<br />                                Label1.Left = Label1.Left + Val(10)<br />                ElseIf n &lt; 400 Then<br />                                n = n + 1<br />                                Label1.Left = Label1.Left - Val(10)<br />                Else<br />                                n = 0<br />                End If<br />End Sub<br /><br /><br /><br /><br /></pre>