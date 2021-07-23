---
id: 548
title: 'Write a VB program to accept Input from Textbox. Check whether given input is     alphabet or number. If it is alphabet check that it is in uppercase or lowercase. Display appropriate result using msgbox.'
date: 2020-08-28T14:44:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-accept-input-from-textbox-check-whether-given-input-is-alphabet-or-number-if-it-is-alphabet-check-that-it-is-in-uppercase-or-lowercase-display-appropriate-result-using-msg/
permalink: /write-a-vb-program-to-accept-input-from-textbox-check-whether-given-input-is-alphabet-or-number-if-it-is-alphabet-check-that-it-is-in-uppercase-or-lowercase-display-appropriate-result-using-msg/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-input-from.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/531287325429143290
rank_math_analytic_object_id:
  - "153"
categories:
  - VB.NET
---
<pre><br />Private Sub Command1_Click()<br />                Dim no As String<br />                no = Text1.Text<br />                If Asc(no) &lt; 91 And Asc(no) > 64 Then<br />                MsgBox ("The given character is alphabet in UppercasLetter")<br />                ElseIfAsc(no) &lt; 123 And Asc(no) > 96 Then<br />                MsgBox ("The given character is alphabet in Lowercaseletter")<br />                ElseIfAsc(no) &lt; 58 And Asc(no) > 47 Then<br />                                MsgBox ("The given character is number")<br />                Else<br />                                MsgBox ("Enter Valid Input")<br />                End If                   <br />End Sub<br /><br /><br /></pre>