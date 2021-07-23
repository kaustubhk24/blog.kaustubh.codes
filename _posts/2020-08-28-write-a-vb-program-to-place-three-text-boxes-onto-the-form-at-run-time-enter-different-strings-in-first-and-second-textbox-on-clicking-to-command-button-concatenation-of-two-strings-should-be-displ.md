---
id: 586
title: Write a VB Program to place three text boxes onto the form at run time. Enter different strings in first and second textbox. On clicking to command button, concatenation of two strings should be displayed in the third text box.
date: 2020-08-28T14:10:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-place-three-text-boxes-onto-the-form-at-run-time-enter-different-strings-in-first-and-second-textbox-on-clicking-to-command-button-concatenation-of-two-strings-should-be-displ/
permalink: /write-a-vb-program-to-place-three-text-boxes-onto-the-form-at-run-time-enter-different-strings-in-first-and-second-textbox-on-clicking-to-command-button-concatenation-of-two-strings-should-be-displ/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-place-three-text.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4181276351383974560
rank_math_analytic_object_id:
  - "190"
categories:
  - VB.NET
---
<pre><br />Dim WithEvents text1 As TextBox<br />Dim WithEvents text2 As TextBox<br />Dim WithEvents text3 As TextBox<br />Dim WithEventscmd As CommandButton<br /><br />Private Sub Form_Load()<br />	Set cmd = Controls.Add("vb.CommandButton", "cmd")<br />	cmd.Left = 600<br />	cmd.Top = 1000<br />	cmd.Caption = "Concat"<br />	cmd.Visible = True<br />	Set text1 = Controls.Add("vb.textbox", "text1")<br />	text1.Left = 100<br />	text1.Top = 100<br />	text1.Visible = True<br />	<br />	Set text2 = Controls.Add("vb.textbox", "text2")<br />	text2.Left = 1500<br />	text2.Top = 100<br />	text2.Visible = True<br />	<br />	Set text3 = Controls.Add("vb.textbox", "text3")<br />	text3.Left = 3000<br />	text3.Top = 100<br />	text3.Visible = True<br />End Sub<br />Private Sub cmd_click()<br />	text3.Text = text1.Text + text2.Text<br />End Sub<br /><br /> <br /><br /><br /></pre>