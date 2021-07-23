---
id: 581
title: 'Write a VB program to accept the details of student and display mark sheet details  on grid control.( roll_ no, student_ name, class, sub1, sub2, sub3, total, percentage, grade)'
date: 2020-08-28T14:17:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-accept-the-details-of-student-and-display-mark-sheet-details-on-grid-control-roll_-no-student_-name-class-sub1-sub2-sub3-total-percentage-grade/
permalink: /write-a-vb-program-to-accept-the-details-of-student-and-display-mark-sheet-details-on-grid-control-roll_-no-student_-name-class-sub1-sub2-sub3-total-percentage-grade/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-details-of.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7750345030789488817
rank_math_analytic_object_id:
  - "185"
categories:
  - VB.NET
---
<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-PZ8xmszzCs4/X0kR5tVp8rI/AAAAAAAAfgE/unp7n2_eI3kJyLfaymoHytTR9WAu7M70ACLcBGAsYHQ/s1366/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="768" data-original-width="1366" src="https://1.bp.blogspot.com/-PZ8xmszzCs4/X0kR5tVp8rI/AAAAAAAAfgE/unp7n2_eI3kJyLfaymoHytTR9WAu7M70ACLcBGAsYHQ/s400/1.png" /></a>
</div>

<pre><br />Private Sub Command1_Click()<br />	lblTotal.Caption = Val(Text4.Text) + Val(Text5.Text) + Val(Text6.Text)<br />	lblPer.Caption = Val(lblTotal.Caption) / 3<br />	total = Val(lblTotal.Caption)<br />	If total &lt; 100 Then<br />		lblGrade.Caption = "D"<br />	ElseIf total &lt; 150 Then<br />		lblGrade.Caption = "C"<br />	ElseIf total &lt; 200 Then<br />		lblGrade.Caption = "B"<br />	ElseIf total &lt; 250 Then<br />		lblGrade.Caption = "A"<br />	ElseIf total &lt; 300 Then<br />		lblGrade.Caption = "A+"<br />	End If<br />	Command1.Enabled = False<br />	Command2.Enabled = True<br />End Sub<br /><br />Private Sub Command2_Click()<br />	With Adodc1.Recordset<br />		.AddNew<br /><br />		!roll = Val(Text1.Text)<br />		!sname = Text2.Text<br />		!sclass = Text3.Text<br />		!sub1 = Text4.Text<br />		!sub2 = Text5.Text<br />		!sub3 = Text6.Text<br />		!total = lblTotal.Caption<br />		!per = lblPer.Caption<br />		!grade = lblGrade.Caption<br />		.Update<br />		.Requery<br />	End With<br />	MsgBox ("Marks Inserted")<br />	Text1.Text = ""<br />	Text2.Text = ""<br />End Sub<br /><br /></pre>