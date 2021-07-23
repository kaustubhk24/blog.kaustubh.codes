---
id: 560
title: 'Design an application in VB which contain  find and replace dialogue box for textbox control with the multiple line of text with 3 options buttons for changing font and three checkboxes for giving effect (Bold, Italic, Underline) to the text. The form should contain following command buttons i. Find ii. Find Next  iii. Replace all'
date: 2020-08-28T14:35:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/design-an-application-in-vb-which-contain-find-and-replace-dialogue-box-for-textbox-control-with-the-multiple-line-of-text-with-3-options-buttons-for-changing-font-and-three-checkboxes-for-giving-eff/
permalink: /design-an-application-in-vb-which-contain-find-and-replace-dialogue-box-for-textbox-control-with-the-multiple-line-of-text-with-3-options-buttons-for-changing-font-and-three-checkboxes-for-giving-eff/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/design-application-in-vb-which-contain.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/1205097197807628188
rank_math_analytic_object_id:
  - "164"
categories:
  - VB.NET
---
Design an application in VB which contain find and replace dialogue box for textbox control with the multiple line of text with 3 options buttons for changing font and three checkboxes for giving effect (Bold, Italic, Underline) to the text. The form should contain following command buttons i. Find ii. Find Next iii. Replace all 

<pre><br />Dim txt As String<br />Dim s, l, r As Integer<br />Private Sub Check1_Click(Index As Integer)<br />	If Check1(0).Value = 1 Then<br /><br /><br />		Text1.Font.Bold = True<br />	Else<br />		Text1.Font.Bold = False<br />	End If<br />	If Check1(1).Value = 1 Then<br />		Text1.Font.Italic = True<br />	Else<br />		Text1.Font.Italic = False<br />	End If<br />	If Check1(2).Value = 1 Then<br />		Text1.Font.Underline = True<br />	Else<br />		Text1.Font.Underline = False<br />	End If<br />End Sub<br /><br />Private Sub find()<br />	txt = InputBox("enter Text to find")<br />	l = Len(txt)<br />	r = InStr(Text1.Text, txt)<br />	Print r<br />	Text1.SelStart = r - 1<br />	Text1.SelLength = l<br />End Sub<br />Private Sub cmdFind_Click()<br />	Call Text1_GotFocus<br />End Sub<br />Private Sub cmdFindNext_Click()<br />	If r <br />		r = InStr(r + 2, Text1.Text, txt, vbTextCompare)<br />		Text1.SelStart = r - 1<br />		Text1.SelLength = l<br />	Else<br />		MsgBox "No more Text", vbInformation, "Find"<br />	End If<br />End Sub<br /><br />Private Sub cmdReplace_Click()<br />	txt1 = InputBox("which text to replace")<br />	txt = InputBox("enter text to replace")<br />	Text1.Text = Replace(Text1.Text, txt1, txt)<br />End Sub<br /><br />Private Sub Form_Load()<br />	Text1.Text = "this is to find and replace the text"<br />End Sub<br /><br />Private Sub Option1_Click(Index As Integer)<br />	If Option1(0).Value = True Then<br />		Text1.Font.Name = “Arial”<br />	ElseIfOption1(1).Value = True Then<br />		Text1.Font.Name = "Arial Black"<br />	Else<br />		Text1.Font.Name = "Times New Roman"<br />	End If<br />End Sub<br /><br />Private Sub Text1_GotFocus()<br />	Call find<br />End Sub<br /><br /><br /></pre>