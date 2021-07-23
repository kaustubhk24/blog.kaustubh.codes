---
id: 568
title: Write a VB Program to display all even and odd numbers from an array
date: 2020-08-28T14:27:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-display-all-even-and-odd-numbers-from-an-array/
permalink: /write-a-vb-program-to-display-all-even-and-odd-numbers-from-an-array/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-display-all-even.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/190228417675499980
rank_math_analytic_object_id:
  - "172"
categories:
  - VB.NET
---
<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-S2GO2ras9rM/X0kUXKzPZjI/AAAAAAAAfgQ/_4qwyZg2Vr8FbmTOk_hz2GNFk8bvkp3xQCLcBGAsYHQ/s1366/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="768" data-original-width="1366" src="https://1.bp.blogspot.com/-S2GO2ras9rM/X0kUXKzPZjI/AAAAAAAAfgQ/_4qwyZg2Vr8FbmTOk_hz2GNFk8bvkp3xQCLcBGAsYHQ/s400/1.png" /></a>
</div>

<pre><br />Private Sub cmdDisplay_Click()<br />	Dim a() As Integer<br />	n = InputBox("How many elements do u want to enter")<br />	ReDima(n)<br />	Print "Array is : "<br />	For i = 0 To n - 1<br />		a(i) = Val(InputBox("Enter the Elements"))<br />		Print a(i)<br />	Next<br />	Print "Even Numbers are: "<br />	For i = 0 To n - 1<br />		If a(i) Mod 2 = 0 Then<br />			Print a(i)<br />		End If<br />	Next<br />	<br />	Print "Odd Numbers are: "<br />	For i = 0 To n - 1<br />		If a(i) Mod 2 &lt;> 0 Then<br />			Print a(i)<br />		End If<br />	Next<br />End Sub<br /><br /></pre>