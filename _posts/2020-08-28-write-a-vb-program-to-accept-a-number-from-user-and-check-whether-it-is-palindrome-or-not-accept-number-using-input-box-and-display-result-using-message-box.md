---
id: 576
title: 'Write a VB Program to accept a number from user and check whether it is palindrome            or not (Accept number using input box ) and display result using message box.'
date: 2020-08-28T14:21:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-accept-a-number-from-user-and-check-whether-it-is-palindrome-or-not-accept-number-using-input-box-and-display-result-using-message-box/
permalink: /write-a-vb-program-to-accept-a-number-from-user-and-check-whether-it-is-palindrome-or-not-accept-number-using-input-box-and-display-result-using-message-box/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-number-from.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/389815865320618933
rank_math_analytic_object_id:
  - "180"
categories:
  - VB.NET
---
<pre><br />Private Sub Command1_Click()<br /><br />	Dim no As Integer<br />	Dim no2 As Integer<br />	Dim sum As Integer<br />	no = Val(Text1.Text)<br />	no2 = no<br />	While no<br />		r = no Mod 10<br />		sum = sum * 10 + r<br />		no = no  10<br />	Wend<br />	If no2 = sum Then<br />		MsgBox ("Number is palindrome")<br />	Else<br />		MsgBox ("Number is not palindrome")<br />	End If<br />	<br />End Sub<br /><br /><br /></pre>