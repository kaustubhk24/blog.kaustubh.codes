---
id: 589
title: 'Create the following application in VB. The form should contain the following menu  Draw   Modify  Exit  Circle   Shrink     Expand     Erase On selection of the menu option ‘Circle’, a circle should be drawn on the screen. The user can Shrink, Expand or Erase the circle by selecting the menu option or by displaying a popup menu after the right mouse button is clicked or pressed. The popup menu should contain the option Shrink, Expand or Erase which should perform the same operation as the menu option.'
date: 2020-08-28T14:05:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/create-the-following-application-in-vb-the-form-should-contain-the-following-menu-draw-modify-exit-circle-shrink-expand-erase-on-selection-of-the-menu-option-circle/
permalink: /create-the-following-application-in-vb-the-form-should-contain-the-following-menu-draw-modify-exit-circle-shrink-expand-erase-on-selection-of-the-menu-option-circle/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/create-following-application-in-vb-form.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4484260605615875512
rank_math_analytic_object_id:
  - "193"
categories:
  - VB.NET
---
<pre><br /><br />Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As    Single)<br />	If Button AndvbRightButton Then<br />		PopupMenumnuModify<br />	End If<br />End Sub<br /><br />Private Sub mnuCircle_Click()<br />	Shape1.Visible = True<br />End Sub<br /><br />Private Sub mnuErase_Click()<br />	Shape1.Visible = False<br />	Shape2.Visible = False<br />	<br /><br />End Sub<br /><br />Private Sub mnuExpand_Click()<br />	Shape2.Visible = False<br />	Shape1.Visible = True<br />	<br />End Sub<br /><br />Private Sub mnuShrink_Click()<br />	Shape2.Visible = True<br />	Shape1.Visible = False<br />End Sub<br /><br /></pre>