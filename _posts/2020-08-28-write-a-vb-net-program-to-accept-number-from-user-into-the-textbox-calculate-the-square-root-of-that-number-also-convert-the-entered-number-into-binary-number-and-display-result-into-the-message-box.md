---
id: 534
title: Write a Vb.net program to accept number from user into the TextBox.Calculate the square root of that number also convert the entered number into binary number and display result into the Message Box
date: 2020-08-28T15:12:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-accept-number-from-user-into-the-textbox-calculate-the-square-root-of-that-number-also-convert-the-entered-number-into-binary-number-and-display-result-into-the-message-box/
permalink: /write-a-vb-net-program-to-accept-number-from-user-into-the-textbox-calculate-the-square-root-of-that-number-also-convert-the-entered-number-into-binary-number-and-display-result-into-the-message-box/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-accept-number_28.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6962193872748342185
rank_math_analytic_object_id:
  - "138"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br />Dim no AsInteger<br />Dim sqr AsDouble<br />Dim rm AsInteger<br />Dim str1 AsString<br /> no = CInt(TextBox1.Text)<br /> sqr = Math.Sqrt(no)<br />While no<br /> rm = no Mod 2<br /> str1 = str1 & rm<br /> no = no  2<br />EndWhile<br /> MsgBox(sqr &" and"& StrReverse(str1))<br />EndSub<br />End Class<br /><br /></pre>