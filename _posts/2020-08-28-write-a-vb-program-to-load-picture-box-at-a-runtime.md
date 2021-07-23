---
id: 551
title: Write a VB program to load picture box at a runtime
date: 2020-08-28T14:42:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-load-picture-box-at-a-runtime/
permalink: /write-a-vb-program-to-load-picture-box-at-a-runtime/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-load-picture-box-at.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6227476414899333217
rank_math_analytic_object_id:
  - "155"
categories:
  - VB.NET
---
<pre><br /><br />Private Sub Form_Load()<br />               <br />                Dim pc As Control<br />                Set pc = Controls.Add("VB.PictureBox", "MyPicture")<br />                pc.Left = 100<br />                pc.Top = 100<br />                pc.Width = 10000<br />                pc.Height = 6000<br />                pc.Picture = LoadPicture("C:UsersRamdasPicturesnr_visiting_card0002.jpg")<br />               pc.Visible = True<br />               <br />End Sub<br /><br /><br /></pre>