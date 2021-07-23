---
id: 554
title: 'Design a calculator in VB, Which has Two extra command buttons to check factorial of          given number and to check whether entered number is even or odd'
date: 2020-08-28T14:39:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/design-a-calculator-in-vb-which-has-two-extra-command-buttons-to-check-factorial-of-given-number-and-to-check-whether-entered-number-is-even-or-odd/
permalink: /design-a-calculator-in-vb-which-has-two-extra-command-buttons-to-check-factorial-of-given-number-and-to-check-whether-entered-number-is-even-or-odd/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/design-calculator-in-vb-which-has-two.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8160021356439922776
rank_math_analytic_object_id:
  - "158"
categories:
  - VB.NET
---
Design a calculator in VB, Which has Two extra command buttons to check factorial of given number and to check whether entered number is even or odd 

<pre><br />Dim no1 As Integer<br />Dim no2 As Integer<br />Dim op As Integer<br /><br /><br />Private Sub Command1_Click()<br />	Text1.Text = Text1.Text & 1<br />End Sub<br /><br />Private Sub Command10_Click()<br />	Text1.Text = Text1.Text & 9<br />End Sub<br /><br />Private Sub Command11_Click()<br />	no1 = Val(Text1.Text)<br />	Text1.Text = "0"<br />	op = 4<br />End Sub<br /><br />Private Sub Command12_Click()<br />	no1 = Val(Text1.Text)<br />	Text1.Text = "0"<br />	op = 5<br />End Sub<br /><br />Private Sub Command13_Click()<br />	no1 = Val(Text1.Text)<br />	If no1 Mod 2 = 0 Then<br />		Text1.Text = "Even"<br />	Else<br />		Text1.Text = "Odd"<br />	End If<br />	<br />	<br />End Sub<br /><br />Private Sub Command14_Click()<br />	Text1.Text = Text1.Text & .<br />End Sub<br /><br />Private Sub Command15_Click()<br />	no2 = Val(Text1.Text)<br />	If op = 1 Then<br />		Text1.Text = no1 + no2<br />	ElseIf op = 2 Then<br />		Text1.Text = no1 - no2<br />		ElseIf op = 3 Then<br />		Text1.Text = no1 * no2<br />		ElseIf op = 4 Then<br />		Text1.Text = no1 / no2<br />		ElseIf op = 5 Then<br />		Text1.Text = no1 Mod no2<br />		End If<br />	<br />End Sub<br /><br />Private Sub Command16_Click()<br />	Dim f As Integer<br />	f = 1<br />	no1 = Val(Text1.Text)<br />	While no1<br />		f = f * no1<br />		no1 = no1 - 1<br />	Wend<br />	Text1.Text = f<br />	<br />End Sub<br /><br />Private Sub Command17_Click()<br />	no1 = Val(Text1.Text)<br />	Text1.Text = "0"<br />	op = 1<br />End Sub<br /><br />Private Sub Command18_Click()<br />	no1 = Val(Text1.Text)<br />	Text1.Text = "0"<br />	op = 2<br />End Sub<br /><br />Private Sub Command19_Click()<br />	no1 = Val(Text1.Text)<br />	Text1.Text = "0"<br />	op = 3<br />End Sub<br /><br />Private Sub Command2_Click()<br />		Text1.Text = Text1.Text & 2<br />End Sub<br /><br />Private Sub Command20_Click()<br />	Text1.Text = "0"<br />End Sub<br /><br />Private Sub Command3_Click()<br />	Text1.Text = Text1.Text & 3<br />End Sub<br /><br />Private Sub Command4_Click()<br />	Text1.Text = Text1.Text & 4<br />	<br />End Sub<br /><br />Private Sub Command5_Click()<br />	Text1.Text = Text1.Text & 6<br />End Sub<br /><br />Private Sub Command6_Click()<br />	Text1.Text = Text1.Text & 5<br />End Sub<br /><br />Private Sub Command7_Click()<br />	Text1.Text = Text1.Text & 8<br />End Sub<br /><br />Private Sub Command8_Click()<br />	Text1.Text = Text1.Text & 7<br />End Sub<br /><br />Private Sub Command9_Click()<br />	Text1.Text = Text1.Text & 0<br />End Sub<br /><br /><br /><br /></pre>