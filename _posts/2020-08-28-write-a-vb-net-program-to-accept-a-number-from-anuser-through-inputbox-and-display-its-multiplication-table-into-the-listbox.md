---
id: 538
title: Write a Vb.net program to accept a number from anuser through InputBox and display its multiplication table into the ListBox
date: 2020-08-28T15:08:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-accept-a-number-from-anuser-through-inputbox-and-display-its-multiplication-table-into-the-listbox/
permalink: /write-a-vb-net-program-to-accept-a-number-from-anuser-through-inputbox-and-display-its-multiplication-table-into-the-listbox/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-accept-number.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8224142896217309813
rank_math_analytic_object_id:
  - "141"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br />Dim no AsInteger<br />Dim i AsInteger<br /> no = CInt(InputBox("Enter Number "))<br />For i = 1 To 10<br /> ListBox1.Items.Add(no * i)<br />Next<br />EndSub<br />EndClass<br /><br /></pre>