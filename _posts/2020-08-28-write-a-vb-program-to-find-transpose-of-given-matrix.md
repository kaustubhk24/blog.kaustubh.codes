---
id: 580
title: Write a VB Program to find transpose of given matrix.
date: 2020-08-28T14:18:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-find-transpose-of-given-matrix/
permalink: /write-a-vb-program-to-find-transpose-of-given-matrix/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-find-transpose-of.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/479310348786195407
rank_math_analytic_object_id:
  - "184"
categories:
  - VB.NET
---
<pre><br />Private Sub cmdMatrix_Click()<br />	Dim a(1, 1) As Integer<br />	For i = 0 To 1<br />		For j = 0 To 1<br />			a(i, j) = InputBox("Enter element" &ij)<br />		Next<br />	Next<br />	Print "Given matrix is"<br /><br />	For i = 0 To 1<br />		For j = 0 To 1<br />			Print a(i, j);<br />		Next<br />		Print ""<br />	Next<br />	Print ""<br />	Print "Transpose of Given matrix is"<br />	For i = 0 To 1<br />		For j = 0 To 1<br />			Print a(j, i);<br />		Next<br />		Print ""<br />	Next<br />End Sub<br /><br /><br /></pre>