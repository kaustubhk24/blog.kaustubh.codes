---
id: 525
title: Write a Vb.net program to design the following form, it contains the three menus Color (Red,Blue,Green) ,Window(Maximize, Minimize, Restore) and Exit. On Selection of any menu or submenu result should affect the form control( for example if user selected Red color from Color menu back color of form should get changed to Red and if user selected Maximize from Window Menu then form should get maximized).
date: 2020-08-28T15:19:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-design-the-following-form-it-contains-the-three-menus-color-redbluegreen-windowmaximize-minimize-restore-and-exit-on-selection-of-any-menu-or-submenu-result-should/
permalink: /write-a-vb-net-program-to-design-the-following-form-it-contains-the-three-menus-color-redbluegreen-windowmaximize-minimize-restore-and-exit-on-selection-of-any-menu-or-submenu-result-should/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-design-following_88.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7985685537361227376
rank_math_analytic_object_id:
  - "129"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub RedToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles RedToolStripMenuItem.Click<br />Me.BackColor = Color.Red<br />EndSub<br />PrivateSub GreenToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles GreenToolStripMenuItem.Click<br />Me.BackColor = Color.Green<br />EndSub<br />PrivateSub BlueToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles BlueToolStripMenuItem.Click<br />Me.BackColor = Color.Blue<br />EndSub<br />PrivateSub MaximizeToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e<br />As System.EventArgs) Handles MaximizeToolStripMenuItem.Click<br />Me.WindowState = FormWindowState.Maximized<br />EndSub<br />PrivateSub MinimizeToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e<br />As System.EventArgs) Handles MinimizeToolStripMenuItem.Click<br />Me.WindowState = FormWindowState.Minimized<br />EndSub<br />PrivateSub CloseToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles CloseToolStripMenuItem.Click<br />Me.WindowState = FormWindowState.Normal<br />EndSub<br />PrivateSub ExToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles ExToolStripMenuItem.Click<br />End<br />EndSub<br />EndClass<br /><br /></pre>