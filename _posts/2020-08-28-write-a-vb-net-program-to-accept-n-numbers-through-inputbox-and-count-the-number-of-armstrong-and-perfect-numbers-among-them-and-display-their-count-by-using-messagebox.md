---
id: 535
title: Write a Vb.net program to accept n numbers through InputBox and count the number of Armstrong and Perfect numbers among them and display their count by using messagebox.
date: 2020-08-28T15:10:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-accept-n-numbers-through-inputbox-and-count-the-number-of-armstrong-and-perfect-numbers-among-them-and-display-their-count-by-using-messagebox/
permalink: /write-a-vb-net-program-to-accept-n-numbers-through-inputbox-and-count-the-number-of-armstrong-and-perfect-numbers-among-them-and-display-their-count-by-using-messagebox/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-accept-n-numbers.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/222773446610582698
rank_math_analytic_object_id:
  - "140"
categories:
  - VB.NET
---
<pre><br /><br />PublicClass Form1<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br />Dim no(10) AsInteger<br />Dim i AsInteger<br />Dim num AsInteger<br />Dim num2 AsInteger<br />Dim r AsInteger<br />Dim armno AsInteger<br />Dim perfct AsInteger<br />Dim cntarm AsInteger<br />Dim cntperfct AsInteger<br />Dim nm AsInteger<br />For i = 0 To 10 - 1<br /> no(i) = CInt(InputBox("Enter Number"))<br />Next<br />For i = 0 To 10 - 1<br /> num = no(i)<br /> armno = 0<br /> perfct = 0<br /> num2 = num<br />While num<br /> r = num Mod 10<br /> armno = armno + r * r * r<br /> num = num  10<br />EndWhile<br />If armno = num2 Then<br /> cntarm = cntarm + 1<br />EndIf<br /> num = num2<br /> nm = 1<br />While nm &lt;= num2  2<br />If num2 Mod nm = 0 Then<br /> perfct = perfct + nm<br />EndIf<br /> nm = nm + 1<br />EndWhile<br />If perfct = num Then<br /> cntperfct = cntperfct + 1<br />EndIf<br />Next<br /> MsgBox("Armstrong numbers "& cntarm)<br />NR Classes (8796064387 / 90) Page 3<br /> MsgBox("Perfect numbers "& cntperfct)<br />EndSub<br />EndClass<br /><br /><br /></pre>