---
id: 542
title: Write a VB program to design Traffic signal using shape control.
date: 2020-08-28T14:50:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-design-traffic-signal-using-shape-control/
permalink: /write-a-vb-program-to-design-traffic-signal-using-shape-control/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-design-traffic.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4589864257509810076
rank_math_analytic_object_id:
  - "147"
categories:
  - VB.NET
---
<pre><br /><br />Private Sub Timer1_Timer()<br />If Shape3.BackColor = vbGreen Then<br />Shape2.BackColor = vbYellow<br />Shape3.BackColor = vbWhite<br />Timer1.Interval = 500<br />ElseIf Shape2.BackColor = vbYellow Then<br />Shape1.BackColor = vbRed<br />Shape2.BackColor = vbWhite<br />Timer1.Interval = 5000<br />Else<br />Shape3.BackColor = vbGreen<br />Shape1.BackColor = vbWhite<br />Timer1.Interval = 3500<br />End If<br />End Sub<br /><br /><br /></pre>