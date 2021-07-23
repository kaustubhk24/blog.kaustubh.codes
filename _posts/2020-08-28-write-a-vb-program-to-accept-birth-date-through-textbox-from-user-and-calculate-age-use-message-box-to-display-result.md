---
id: 575
title: Write a VB Program to accept birth date through textbox from user and calculate age. (Use Message box to display result)
date: 2020-08-28T14:22:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-accept-birth-date-through-textbox-from-user-and-calculate-age-use-message-box-to-display-result/
permalink: /write-a-vb-program-to-accept-birth-date-through-textbox-from-user-and-calculate-age-use-message-box-to-display-result/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-birth-date.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/3064672889683871088
rank_math_analytic_object_id:
  - "178"
categories:
  - VB.NET
---
<pre><br />Private Sub Command1_Click()<br />	BirthDate = Text1.Text<br />	MsgBox ("Age :" &ExactAge(BirthDate))<br />	<br />End Sub<br /><br />Public Function ExactAge(BirthDate As Variant) As String<br />	<br />	Dim yer As Integer, mon As Integer, d As Integer<br />	Dim dt As Date<br />	Dim sAns  As String<br />	<br />	dt = CDate(BirthDate)<br />	If dt> Now Then Exit Function<br />	<br />	yer = Year(dt)<br />	Print yer<br />	mon = Month(dt)<br />	Print mon<br />	d = Day(dt)<br />	Print d<br />	yer = Year(Date) - yer<br />	mon = Month(Date) - mon<br />	d = Day(Date) - d<br />	sAns = yer& " year(s) " &mon& " month(s) " & d & " day(s) old."<br />	ExactAge = sAns<br />	<br />End Function<br /><br /><br /></pre>