---
id: 540
title: Write a Vb.net program to check whether entered string is palindrome or not.
date: 2020-08-28T15:06:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-check-whether-entered-string-is-palindrome-or-not/
permalink: /write-a-vb-net-program-to-check-whether-entered-string-is-palindrome-or-not/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-check-whether.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2121826949163948734
rank_math_analytic_object_id:
  - "144"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br />Dim str1 AsString<br /> str1 = TextBox1.Text<br />If str1 = StrReverse(str1) Then<br /> MsgBox("String is palindrome")<br />Else<br /> MsgBox("String is not palindrome")<br />EndIf<br />EndSub<br />EndClass<br /><br /></pre>