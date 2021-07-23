---
id: 564
title: 'Write a VB program to accept the details of product (pno, pname, qty, price           totalprice) store it into the database and update the quantity of product having pno is 100.  (Don’t use Standard Data controls)'
date: 2020-08-28T14:31:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-accept-the-details-of-product-pno-pname-qty-price-totalprice-store-it-into-the-database-and-update-the-quantity-of-product-having-pno-is-100-dont-use-s/
permalink: /write-a-vb-program-to-accept-the-details-of-product-pno-pname-qty-price-totalprice-store-it-into-the-database-and-update-the-quantity-of-product-having-pno-is-100-dont-use-s/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-details-of_52.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/3065924186416462214
rank_math_analytic_object_id:
  - "168"
categories:
  - VB.NET
---
<pre><br />Private Sub Command1_Click()<br />	Dim str As String<br />	str = Text4.Text<br />	If Not InStr(1, "@", str) And Text4.Text &lt;> "" Then<br />		If Not InStr(1, ".", str) Then<br />			MsgBox ("All data validated")<br />		Else<br />			MsgBox ("Email not contain .")<br />		End If<br />	Else<br />		MsgBox ("Email withoun @")<br />	End If<br />End Sub<br /><br />Private Sub Text1_KeyPress(KeyAscii As Integer)<br />	Print KeyAscii<br />	Select Case Chr(KeyAscii)<br />	Case 0 To 9<br />		MsgBox ("Only Characters are allowed")<br />		KeyAscii = 0<br />	End Select<br />	<br />End Sub<br /><br />Private Sub Text2_KeyPress(KeyAscii As Integer)<br />	If Not IsNumeric(Text2.Text &Chr(KeyAscii)) And Not KeyAscii = 8 Then<br />		MsgBox ("only Numbers are allowed")<br />		KeyAscii = 0 '8 for backspace<br />	End If<br />	<br />End Sub<br /><br /><br /><br /><br /><br /></pre>