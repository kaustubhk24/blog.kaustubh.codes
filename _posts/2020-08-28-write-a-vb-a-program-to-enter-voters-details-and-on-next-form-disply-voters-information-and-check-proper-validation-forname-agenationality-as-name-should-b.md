---
id: 559
title: 'Write a VB a program to enter “Voters details and on next form disply Voter’s            Information and  check proper validation for(name, age,nationality) as  • Name should be in upper case letters   • Age should not be less than 18 yrs. • Natinality should be Indian.'
date: 2020-08-28T14:36:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-a-program-to-enter-voters-details-and-on-next-form-disply-voters-information-and-check-proper-validation-forname-agenationality-as-name-should-b/
permalink: /write-a-vb-a-program-to-enter-voters-details-and-on-next-form-disply-voters-information-and-check-proper-validation-forname-agenationality-as-name-should-b/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-enter-voters.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6150075916196159201
rank_math_analytic_object_id:
  - "163"
categories:
  - VB.NET
---
Write a VB a program to enter “Voters details and on next form disply Voter’s Information and check proper validation for(name, age,nationality) as • Name should be in upper case letters • Age should not be less than 18 yrs. • Natinality should be Indian. 

<pre><br />Dim age As Integer<br />Dim vname As String<br /><br />Private Sub Command1_Click()<br />	age = Text2.Text<br />	vname = Text1.Text<br />	<br />	If Val(Text2.Text) &lt; 18 Then<br />		MsgBox ("Age should be greater than 18")<br />	ElseIf Text3.Text &lt;> "Indian" Then<br />		MsgBox ("Nationality must be Indian")<br />	Else<br />		Form2.Show<br /><br />		Form2.Label4.Caption = vname<br />		Form2.Label5.Caption = age<br />	End If<br />End Sub<br /><br />Private Sub Text1_KeyPress(KeyAscii As Integer)<br /><br />	Select Case Chr(KeyAscii)<br />	Case "a" To "z"<br />		MsgBox ("Only Capital letters are allowed")<br />		KeyAscii = 0<br />	Case 0 To 9<br />		MsgBox ("Only Characters are allowed")<br />		KeyAscii = 0<br />	End Select<br />End Sub<br /><br /><br /></pre>