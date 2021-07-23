---
id: 565
title: 'Write a VB Program to create a POPUP menu. Menu are Color (sub menu- red, green, blue,    yellow), Font (Times New Roman, Verdana, Arial Black etc), Font Size (10, 11, 12 etc) after clicking on particular menu changes should reflect on Label control'
date: 2020-08-28T14:31:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-create-a-popup-menu-menu-are-color-sub-menu-red-green-blue-yellow-font-times-new-roman-verdana-arial-black-etc-font-size-10-11-12-etc-after-clicking-on-partic/
permalink: /write-a-vb-program-to-create-a-popup-menu-menu-are-color-sub-menu-red-green-blue-yellow-font-times-new-roman-verdana-arial-black-etc-font-size-10-11-12-etc-after-clicking-on-partic/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-create-popup-menu.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/9197701088791253763
rank_math_analytic_object_id:
  - "169"
categories:
  - VB.NET
---
<pre><br />Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)<br />	If Button AndvbRightButton Then<br />		PopupMenumnuMenu<br />	End If<br /><br /><br />End Sub<br /><br />Private Sub mnuArial_Click()<br />	Label1.FontName = "Arial Black"<br />End Sub<br /><br />Private Sub mnuGreen_Click()<br />	Label1.ForeColor = vbGreen<br />End Sub<br /><br />Private Sub mnuRed_Click()<br />	Label1.ForeColor = vbRed<br />End Sub<br /><br />Private Sub mnuSize10_Click()<br />	Label1.FontSize = 10<br />End Sub<br /><br />Private Sub mnuSize12_Click()<br />	Label1.FontSize = 12<br />End Sub<br /><br />Private Sub mnuTNR_Click()<br />	Label1.FontName = "Times New Roman"<br />End Sub<br /><br />Private Sub mnuVer_Click()<br />	Label1.FontName = "Verdana"<br />End Sub<br /><br /><br /></pre>