---
id: 570
title: 'Write a VB program for currency conversion. The program should input the amount in            any currency and the output should be displayed in the desire currency as selected by the             user. An input form should accept all the currency rates. The various currencies are rupee,             dollar, pound and euro.  (Use textbox control for  input and to display output also)'
date: 2020-08-28T14:25:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-for-currency-conversion-the-program-should-input-the-amount-in-any-currency-and-the-output-should-be-displayed-in-the-desire-currency-as-selected-by-the-user/
permalink: /write-a-vb-program-for-currency-conversion-the-program-should-input-the-amount-in-any-currency-and-the-output-should-be-displayed-in-the-desire-currency-as-selected-by-the-user/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-for-currency.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2005748907845329260
rank_math_analytic_object_id:
  - "175"
categories:
  - VB.NET
---
<pre><br />Dim pound As Integer<br /><br />Dim dollar As Integer<br />Dim euro As Integer<br /><br />Private Sub cmdConvert_Click()<br />	<br />	If Option1.Value = True Then<br />		Label2.Caption = "Dollar"<br />		Text2.Text = Val(Text1.Text) / dollar<br />	ElseIf Option2.Value = True Then<br />		Label2.Caption = "Pound"<br />		Text2.Text = Val(Text1.Text) / pound<br />	ElseIf Option3.Value = True Then<br />		Label2.Caption = "Euro"<br />		Text2.Text = Val(Text1.Text) / euro<br />	Else<br />		MsgBox ("Select Conversion type")<br />	End If<br />	<br />End Sub<br />Private Sub cmdRates_Click()<br />	<br />	pound = Val(InputBox("Enter Rate of pound"))<br />	dollar = Val(InputBox("Enter Rate of Dollar"))<br />	euro = Val(InputBox("Enter Rate of euro"))<br />	cmdConvert.Enabled = True<br />	<br />End Sub<br />Private Sub Form_Load()<br />	cmdConvert.Enabled = False<br />End Sub<br /><br /><br /><br /></pre>