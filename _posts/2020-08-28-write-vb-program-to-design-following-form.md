---
id: 552
title: Write VB program to design following form
date: 2020-08-28T14:41:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-vb-program-to-design-following-form/
permalink: /write-vb-program-to-design-following-form/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-design-following_28.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4419141578218873462
rank_math_analytic_object_id:
  - "156"
categories:
  - VB.NET
---
<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-O5Xd__AGE84/X0kXemr1PWI/AAAAAAAAfgw/fe9-18WRlnsga64NDQPt8TuP8NsMhL5ZQCLcBGAsYHQ/s314/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="313" data-original-width="314" src="https://1.bp.blogspot.com/-O5Xd__AGE84/X0kXemr1PWI/AAAAAAAAfgw/fe9-18WRlnsga64NDQPt8TuP8NsMhL5ZQCLcBGAsYHQ/s400/1.png" /></a>
</div>

User will select color from option button and style from check boxes that should apply to text in text boxes. When user press on Display button that image should be displayed in the picture box. 

<pre><br />Private Sub Command1_Click()<br />    If Option1(0).Value Then<br />        Text1.ForeColor = vbRed<br />        Text2.ForeColor = vbRed<br />    ElseIf Option1(1).Value Then<br />        Text1.ForeColor = vbGreen<br />        Text2.ForeColor = vbGreen<br />    ElseIf Option1(2).Value Then<br />        Text1.ForeColor = vbBlue<br />        Text2.ForeColor = vbBlue<br />    Else<br />        Text1.ForeColor = vbBlack<br />        Text2.ForeColor = vbBlack<br />    End If<br />    If Check1.Value = 1 Then<br />        Text1.Font.Bold = True<br />        Text2.Font.Bold = True<br />    Else<br />        Text1.Font.Bold = False<br />        Text2.Font.Bold = False<br />    End If<br />    If Check2.Value = 1 Then<br />        Text1.Font.Italic = True<br />        Text2.Font.Italic = True<br />    Else<br />        Text1.Font.Italic = False<br />        Text2.Font.Italic = False<br />    End If<br />    If Check3.Value = 1 Then<br />        Text1.Font.Underline = True<br />        Text2.Font.Underline = True<br />    Else<br />        Text1.Font.Underline = False<br />        Text2.Font.Underline = False<br />    End If<br />End Sub<br /><br />Private Sub Command2_Click()<br />Text1.Text = ""<br />Text2.Text = ""<br />Check1.Value = 0<br />Check2.Value = 0<br />Check3.Value = 0<br />For i = 0 To 3<br />Option1(i).Value = False<br />Next<br />Picture1.Picture = LoadPicture("")<br /><br />End Sub<br /><br />Private Sub Command3_Click()<br />Unload Me<br />End Sub<br /><br />Private Sub Image1_Click()<br />Picture1.Picture = Image1.Picture<br />End Sub						     <br /><br /><br /><br /></pre>