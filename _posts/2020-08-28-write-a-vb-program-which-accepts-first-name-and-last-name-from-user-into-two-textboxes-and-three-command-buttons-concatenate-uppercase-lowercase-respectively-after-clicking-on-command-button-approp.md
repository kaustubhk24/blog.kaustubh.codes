---
id: 555
title: Write a VB program which accepts First name and last name from user into two textboxes and three command buttons Concatenate, Uppercase, Lowercase respectively. After clicking on command button appropriate result should get display into third textbox.
date: 2020-08-28T14:38:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-which-accepts-first-name-and-last-name-from-user-into-two-textboxes-and-three-command-buttons-concatenate-uppercase-lowercase-respectively-after-clicking-on-command-button-approp/
permalink: /write-a-vb-program-which-accepts-first-name-and-last-name-from-user-into-two-textboxes-and-three-command-buttons-concatenate-uppercase-lowercase-respectively-after-clicking-on-command-button-approp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-which-accepts-first.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4623965030294348941
rank_math_analytic_object_id:
  - "159"
categories:
  - VB.NET
---
Write a VB program which accepts First name and last name from user into two textboxes and three command buttons Concatenate, Uppercase, Lowercase respectively. After clicking on command button appropriate result should get display into third textbox. 

<pre><br /><br />Private Sub Command1_Click()<br /><br />	Text3.Text = Text1.Text + Text2.Text<br />	<br />End Sub<br />Private Sub Command2_Click()<br />	Text3.Text = UCase(Text3.Text)<br />End Sub<br /><br />Private Sub Command3_Click()<br />	Text3.Text = LCase(Text3.Text)<br />	<br />End Sub	<br /> <br /><br /><br /></pre>