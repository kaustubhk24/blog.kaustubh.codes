---
id: 579
title: Design an application that contains one Label and two combo boxes, one combo box contains any text and second combo box contains color names. Write a VB Program to set caption and background color to the label control from respective combo boxes.
date: 2020-08-28T14:19:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/design-an-application-that-contains-one-label-and-two-combo-boxes-one-combo-box-contains-any-text-and-second-combo-box-contains-color-names-write-a-vb-program-to-set-caption-and-background-color-to/
permalink: /design-an-application-that-contains-one-label-and-two-combo-boxes-one-combo-box-contains-any-text-and-second-combo-box-contains-color-names-write-a-vb-program-to-set-caption-and-background-color-to/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/design-application-that-contains-one.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/1971737166414441676
rank_math_analytic_object_id:
  - "183"
categories:
  - VB.NET
---
<pre><br />Private Sub Combo1_Click()<br />	Label1.Caption = Combo1.Text<br />End Sub<br /><br />Private Sub Combo2_Click()<br />	If Combo2.Text = "Red" Then<br />		Label1.BackColor = vbRed<br />	ElseIf Combo2.Text = "Green" Then<br />		Label1.BackColor = vbGreen<br />	Else<br />		Label1.BackColor = vbBlue<br />	End If<br />End Sub<br /><br /><br /><br /><br /></pre>