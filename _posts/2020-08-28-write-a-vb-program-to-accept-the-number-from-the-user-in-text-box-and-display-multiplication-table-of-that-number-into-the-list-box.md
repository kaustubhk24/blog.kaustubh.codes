---
id: 571
title: Write a VB Program to accept the number from the user in text box and display multiplication table of that number into the list box.
date: 2020-08-28T14:25:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-accept-the-number-from-the-user-in-text-box-and-display-multiplication-table-of-that-number-into-the-list-box/
permalink: /write-a-vb-program-to-accept-the-number-from-the-user-in-text-box-and-display-multiplication-table-of-that-number-into-the-list-box/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-number-from_28.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7144732683342447545
rank_math_analytic_object_id:
  - "174"
categories:
  - VB.NET
---
<pre><br />Private Sub cmdShow_Click()<br /><br />no = Val(Text1.Text)<br />For i = 1 To 10 Step 1<br />List1.AddItem (no &" x " & i & " = " & no * i)<br />Next<br />End Sub<br /><br /><br /></pre>