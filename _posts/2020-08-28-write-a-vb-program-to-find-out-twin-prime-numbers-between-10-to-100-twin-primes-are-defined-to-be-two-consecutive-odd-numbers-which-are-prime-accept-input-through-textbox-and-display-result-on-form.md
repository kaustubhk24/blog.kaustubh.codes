---
id: 590
title: 'Write a VB program to find out twin prime numbers between 10 to 100. Twin primes are defined to be two consecutive odd numbers, which are prime (Accept input through textbox and display result on form) e.g.: 11 and 13, 17 and 19 are twin prime numbers.'
date: 2020-08-28T14:03:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-find-out-twin-prime-numbers-between-10-to-100-twin-primes-are-defined-to-be-two-consecutive-odd-numbers-which-are-prime-accept-input-through-textbox-and-display-result-on-form/
permalink: /write-a-vb-program-to-find-out-twin-prime-numbers-between-10-to-100-twin-primes-are-defined-to-be-two-consecutive-odd-numbers-which-are-prime-accept-input-through-textbox-and-display-result-on-form/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-find-out-twin-prime.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4527832768092030192
rank_math_analytic_object_id:
  - "194"
categories:
  - VB.NET
---
<pre><br /><br />Private Sub Command1_Click()<br />	Dim no1 As Integer<br />	Dim no2 As Integer<br />	Dim i As Integer<br />	Dim flag As Boolean<br />	flag = False<br />	<br />	no1 = Val(Text1.Text)<br /><br />	no2 = Val(Text2.Text)<br />	<br />	If no1 > 10 And no2 &lt; 100 Then<br />		While no1 &lt;= no2<br />			For i = 2 To no1  2<br />				If no1 Mod i = 0 Then<br />					flag = True<br />				End If<br />			Next<br />			If flag = True Then<br />MsgBox ("Either of the number is not prime")<br />End<br />			Else<br />				cnt = cnt + 1<br />				no3 = no1<br />				no1 = no1 + 2<br />				flag = False<br />				<br />			End If<br />			If cnt = 2 Then<br />				If no3 = no2 Then<br />					MsgBox "No1 and no2 are twin primes"<br />				Else<br />					MsgBox "No1 and no2 are not twin primes"<br />				End If<br />				End<br />			End If<br />		Wend<br />	 End If<br />            End Sub<br /><br />       Private Sub Text1_Click()<br />	Text1.Text = ""<br />        End Sub<br /><br />Private Sub Text2_Click()<br />	Text2.Text = ""<br />End Sub<br /><br /><br /><br /><br /><br /></pre>