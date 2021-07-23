---
id: 539
title: Write a Vb.net program for blinking an image
date: 2020-08-28T15:07:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-for-blinking-an-image/
permalink: /write-a-vb-net-program-for-blinking-an-image/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-for-blinking-image.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7129853007233075465
rank_math_analytic_object_id:
  - "143"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub Timer1_Tick(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Timer1.Tick<br />If PictureBox1.Visible = TrueThen<br /> PictureBox1.Visible = False<br />Else<br /> PictureBox1.Visible = True<br />EndIf<br />EndSub<br />EndClass<br /><br /></pre>