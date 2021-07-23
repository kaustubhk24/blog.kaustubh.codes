---
id: 566
title: Write a VB program to design following screen with validation name should contain character only, mobile number should contain only 10 digit, Pin code should contain only 6 digit, email id should contain @, . symbol
date: 2020-08-28T14:30:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-design-following-screen-with-validation-name-should-contain-character-only-mobile-number-should-contain-only-10-digit-pin-code-should-contain-only-6-digit-email-id-should-cont/
permalink: /write-a-vb-program-to-design-following-screen-with-validation-name-should-contain-character-only-mobile-number-should-contain-only-10-digit-pin-code-should-contain-only-6-digit-email-id-should-cont/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-design-following.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4194237997545625822
rank_math_analytic_object_id:
  - "170"
categories:
  - VB.NET
---
<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-nineOD0gr_A/X0kU3_8x8fI/AAAAAAAAfgY/DMPeqqbhjBo0uBGUMWCbFViT0SMa1BuWQCLcBGAsYHQ/s442/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="386" data-original-width="442" src="https://1.bp.blogspot.com/-nineOD0gr_A/X0kU3_8x8fI/AAAAAAAAfgY/DMPeqqbhjBo0uBGUMWCbFViT0SMa1BuWQCLcBGAsYHQ/s400/1.png" /></a>
</div>

<pre><br />Private Sub Command1_Click()<br />                Dim str As String<br />                str = Text4.Text<br />                If Not InStr(1, "@", str) And Text4.Text &lt;> "" Then<br />                                If Not InStr(1, ".", str) Then<br />                                                MsgBox ("All data validated")<br />                                Else<br />                                                MsgBox ("Email not contain .")<br />                                End If<br />                Else<br />                                MsgBox ("Email withoun @")<br />                End If<br />End Sub<br /><br />Private Sub Text1_KeyPress(KeyAscii As Integer)<br />                Print KeyAscii<br />                Select Case Chr(KeyAscii)<br />    	      Case 0 To 9<br />                                MsgBox ("Only Characters are allowed")<br />                                KeyAscii = 0<br />                End Select<br />               <br />End Sub<br /><br />Private Sub Text2_KeyPress(KeyAscii As Integer)<br />                If Not IsNumeric(Text2.Text &Chr(KeyAscii)) And Not KeyAscii = 8 Then<br />                                MsgBox ("only Numbers are allowed")<br />                                KeyAscii = 0 '8 for backspace<br />                End If<br />               <br />End Sub<br /><br /><br /><br /><br /></pre>