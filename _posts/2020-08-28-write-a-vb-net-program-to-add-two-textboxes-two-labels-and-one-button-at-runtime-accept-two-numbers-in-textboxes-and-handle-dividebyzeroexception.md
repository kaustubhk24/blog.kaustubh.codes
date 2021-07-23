---
id: 536
title: Write a Vb.net program to add two TextBoxes, two Labels and one button at runtime. Accept two numbers in textboxes and handle DivideByZeroException.
date: 2020-08-28T15:10:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-add-two-textboxes-two-labels-and-one-button-at-runtime-accept-two-numbers-in-textboxes-and-handle-dividebyzeroexception/
permalink: /write-a-vb-net-program-to-add-two-textboxes-two-labels-and-one-button-at-runtime-accept-two-numbers-in-textboxes-and-handle-dividebyzeroexception/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-add-two.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2000538316821746699
rank_math_analytic_object_id:
  - "139"
categories:
  - VB.NET
---
<pre><br /><br />PublicClass Form1<br />Dim text1 AsNew TextBox<br />Dim text2 AsNew TextBox<br />DimWithEvents btn AsNew Button<br />PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)<br />HandlesMyBase.Load<br />'text3(i) = New TextBox<br /> text1.Visible = True<br /> text1.Location = New Point(20, 20)<br /> text1.Size = New Size(150, 15)<br />Me.Controls.Add(text1)<br /> text2.Visible = True<br /> text2.Location = New Point(20, 40)<br /> text2.Size = New Size(150, 15)<br />Me.Controls.Add(text2)<br /> btn.Visible = True<br /> btn.Location = New Point(20, 70)<br /> btn.Size = New Size(150, 40)<br /> btn.Text = "Click"<br />Me.Controls.Add(btn)<br />EndSub<br />PrivateSub btn_click(ByVal sender As System.Object, ByVal e As System.EventArgs)<br />Handles btn.Click<br /> MsgBox("Hi")<br />Dim a AsInteger<br />Try<br /> a = CInt(text1.Text)  CInt(text2.Text)<br /> MsgBox("Result "& a)<br />Catch ex As DivideByZeroException<br /> MsgBox(ex.Message)<br />EndTry<br />EndSub<br />EndClass<br /><br /></pre>