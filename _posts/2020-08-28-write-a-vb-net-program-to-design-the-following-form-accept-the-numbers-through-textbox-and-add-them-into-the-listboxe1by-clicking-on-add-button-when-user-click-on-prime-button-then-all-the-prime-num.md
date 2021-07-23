---
id: 529
title: Write a Vb.net program to design the following form, accept the numbers through textbox and add them into the ListBoxe1by clicking on Add button. When user click on Prime button then all the prime numbers from ListBox1 should get added into ListBox2.
date: 2020-08-28T15:15:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-design-the-following-form-accept-the-numbers-through-textbox-and-add-them-into-the-listboxe1by-clicking-on-add-button-when-user-click-on-prime-button-then-all-the-prime-num/
permalink: /write-a-vb-net-program-to-design-the-following-form-accept-the-numbers-through-textbox-and-add-them-into-the-listboxe1by-clicking-on-add-button-when-user-click-on-prime-button-then-all-the-prime-num/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-design-following_28.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/1153384614485605973
rank_math_analytic_object_id:
  - "133"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub btnAdd_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles btnAdd.Click<br /> ListBox1.Items.Add(CInt(TextBox1.Text))<br /> TextBox1.Text = ""<br />EndSub<br />PrivateSub btnPrime_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles btnPrime.Click<br />Dim i AsInteger<br />Dim cnt AsInteger<br />Dim num AsInteger<br />Dim f AsInteger<br />Dim j AsInteger<br /> cnt = ListBox1.Items.Count<br /> Try<br />For i = 0 To cnt - 1<br /> num = ListBox1.Items(i)<br /> f = 0<br />For j = 2 To num  2<br />If num Mod j = 0 Then<br /> f = 1<br />EndIf<br />Next<br />If f = 0 Then<br /> ListBox2.Items.Add(ListBox1.Items(i))<br />ListBox1.Items.RemoveAt(i)<br />cnt = cnt - 1<br /> i = i - 1<br />EndIf<br />Next<br />Catch ex As Exception<br />EndTry<br />EndSub<br />EndClass<br /><br /></pre>