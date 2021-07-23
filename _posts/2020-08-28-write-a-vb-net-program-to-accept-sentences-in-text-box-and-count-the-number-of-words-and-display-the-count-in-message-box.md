---
id: 531
title: Write a Vb.net program to accept sentences in text box and count the number of words and display the count in message box
date: 2020-08-28T15:14:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-accept-sentences-in-text-box-and-count-the-number-of-words-and-display-the-count-in-message-box/
permalink: /write-a-vb-net-program-to-accept-sentences-in-text-box-and-count-the-number-of-words-and-display-the-count-in-message-box/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-accept-sentences.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/3072388354013016413
rank_math_analytic_object_id:
  - "134"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br />Dim sentence AsString<br />Dim i AsInteger<br />Dim wc AsInteger<br /> sentence = TextBox1.Text<br />Dim arr() AsChar = sentence.ToCharArray()<br />For i = 0 To arr.Length - 1<br />If arr(i) = " "Then<br /> wc = wc + 1<br />EndIf<br />Next<br /> MsgBox("Total Words "& wc + 1)<br />EndSub<br />EndClass<br /><br /></pre>