---
id: 537
title: Write a Vb.Net program to move the Text “SwayAlgo.com” continuously from Left to Right.
date: 2020-08-28T15:08:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-move-the-text-justinclicks-com-continuously-from-left-to-right/
permalink: /write-a-vb-net-program-to-move-the-text-justinclicks-com-continuously-from-left-to-right/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-move-text.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6795104846406043431
rank_math_seo_score:
  - "6"
rank_math_primary_category:
  - "8"
saswp_custom_schema_field:
  - ""
rank_math_analytic_object_id:
  - "142"
categories:
  - VB.NET
---
<pre>PublicClass Form1
PrivateSub Timer1_Tick(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles Timer1.Tick
If Label1.Left &gt; 400 Then
 Label1.Left = 10
EndIf
 Label1.Left = Label1.Left + 15
EndSub
EndClass
</pre>