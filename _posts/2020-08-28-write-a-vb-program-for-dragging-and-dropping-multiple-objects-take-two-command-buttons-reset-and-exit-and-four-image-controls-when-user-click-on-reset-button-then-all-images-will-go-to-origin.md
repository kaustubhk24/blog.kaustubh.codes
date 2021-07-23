---
id: 543
title: 'Write a VB program for dragging and dropping multiple objects. (Take two command buttons     RESET and EXIT, and four image controls). When user click on reset button then all images will go to original position.'
date: 2020-08-28T14:50:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-for-dragging-and-dropping-multiple-objects-take-two-command-buttons-reset-and-exit-and-four-image-controls-when-user-click-on-reset-button-then-all-images-will-go-to-origin/
permalink: /write-a-vb-program-for-dragging-and-dropping-multiple-objects-take-two-command-buttons-reset-and-exit-and-four-image-controls-when-user-click-on-reset-button-then-all-images-will-go-to-origin/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-for-dragging-and.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7756880981037859638
rank_math_analytic_object_id:
  - "146"
categories:
  - VB.NET
---
<pre><br /><br />           Private Sub Command1_Click()<br />For i = 1 To 4<br />Image1(i).Visible = True<br />Next<br />End Sub<br /><br />Private Sub Command1_DragDrop(Source As Control, X As Single, Y As Single)<br />BadDrop Source<br /><br />End Sub<br /><br />Private Sub Command2_Click()<br />Unload Me<br />End Sub<br /><br />Private Sub Command2_DragDrop(Source As Control, X As Single, Y As Single)<br />BadDrop Source<br />End Sub<br /><br />Private Sub Command2_DragOver(Source As Control, X As Single, Y As Single, State As Integer)<br />Source.Visible = False<br />End Sub<br /><br />Private Sub Form_DragDrop(Source As Control, X As Single, Y As Single)<br />Dim i As Integer<br />For i = 1 To 4<br />Image1(i).DragIcon = Image1(i).Picture<br />Next<br />End Sub<br /><br />Private Sub Form_DragOver(Source As Control, X As Single, Y As Single, State As Integer)<br />Source.Visible = False<br />End Sub<br /><br />Private Sub Picture1_DragDrop(Source As Control, X As Single, Y As Single)<br />Picture1.Picture = Source.Picture<br />End Sub<br />Private Sub BadDrop(Source)<br />Source.Visible = True<br />End Sub<br /><br /></pre>