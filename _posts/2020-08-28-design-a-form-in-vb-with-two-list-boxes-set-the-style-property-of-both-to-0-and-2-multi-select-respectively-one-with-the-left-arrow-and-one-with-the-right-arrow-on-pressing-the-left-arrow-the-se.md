---
id: 585
title: 'Design a form in VB with two List boxes. Set the style property of both to 0 and 2 (Multi select) respectively. One with the left arrow and  one with the right arrow. On pressing the left arrow the selected item from List Box 1 should be transferred to List Box 2 (only if it does exist in List Box 2). If the right arrow is pressed, the selected item (multiple selection are not in ListBox2) transferred to List box 1.Add items and remove items buttons for each list. Duplicate item should not be added.'
date: 2020-08-28T14:12:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/design-a-form-in-vb-with-two-list-boxes-set-the-style-property-of-both-to-0-and-2-multi-select-respectively-one-with-the-left-arrow-and-one-with-the-right-arrow-on-pressing-the-left-arrow-the-se/
permalink: /design-a-form-in-vb-with-two-list-boxes-set-the-style-property-of-both-to-0-and-2-multi-select-respectively-one-with-the-left-arrow-and-one-with-the-right-arrow-on-pressing-the-left-arrow-the-se/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/design-form-in-vb-with-two-list-boxes.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6557832448369406718
rank_math_analytic_object_id:
  - "189"
categories:
  - VB.NET
---
<pre><br />Private Sub cmdAddLeft_Click()<br />	List1.AddItem (InputBox("Enter Item"))<br />End Sub<br /><br />Private Sub cmdAddRight_Click()<br />	Item = InputBox("Enter Item: ", "Left List")<br />	For i = 0 TolstRight.ListCount - 1<br />		If lstRight.List(i) = Item Then<br />			MsgBox "Record Is Already Present In The List.", vbOKOnly, "Result"<br />			Exit Sub<br />		End If<br />		lstRight.AddItem Item<br />	Next<br />End Sub<br /><br />Private Sub cmdRemoveLeft_Click()<br />	If lstRight.ListCount = 0 Then<br />		MsgBox ("No more items to delete")<br />		End<br />	Else<br />		lstRight.RemoveItem (0)<br />		<br />	End If<br />End Sub<br />Private Sub cmdRemoveRight_Click()<br />	If List1.ListCount = 0 Then<br />		MsgBox ("No more items to delete")<br />		End<br />	Else<br />		List1.RemoveItem (0)<br />	End If<br />	<br />End Sub<br /><br />Private Sub Command1_Click()<br />	cnt = lstRight.ListCount<br />	<br />	If List1.ListCount = 0 Then<br />		MsgBox ("No more items to Move")<br />		Exit Sub<br />	Else<br />		For i = List1.ListCount - 1 To 0 Step -1<br />			If List1.Selected(i) = True Then<br />				For j = lstRight.ListCount - 1 To 0 Step -1<br />					If lstRight.List(j) &lt;> List1.List(i) Then<br />						lstRight.AddItem (List1.List(i))<br />						List1.RemoveItem (i)<br />					Else<br />						MsgBox ("Item "& List1.Selected(i) & "already exist")<br />					End If<br />					<br />				Next<br />				<br />			End If<br />		Next<br />		<br />	End If<br />	<br />End Sub<br /><br />Private Sub Command2_Click()<br />	If List2.ListCount = 0 Then<br />		MsgBox ("No more items to Move")<br />		Exit Sub<br />		<br />	Else<br />		List1.AddItem (List2.List(ListIndex))<br />		List2.RemoveItem (ListIndex)<br />	End If<br />End Sub<br /> <br /><br /><br /><br /><br /><br /><br /></pre>